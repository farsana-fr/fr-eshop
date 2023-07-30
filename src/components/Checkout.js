import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

function Checkout() {
  const nav=useNavigate();
  const [name,setName]=useState('');

  const initialValues={name:"",phone:"",house:"",area:"",landmark:"",pincode:"",town:"",state:""}
  const [formValues,setFormValues]=useState(initialValues);
  const [formError,setFormError]=useState({});
  const [isSubmit,setIsSubmit]=useState(false)
  function handleFormSubmit(e){
    e.preventDefault();
    console.log(name);
    setFormError(validate(formValues));
    setIsSubmit(true);
    // nav('/payment')
  }
  function handleChange(e){
    // console.log(e.target);
    const {name,value}=e.target;
    // console.log(e.target);
    setFormValues({...formValues,[name]:value});
     console.log(formValues);
    
    
  }
  useEffect(()=>{
    console.log(formError);
    if(Object.keys(formError).length===0&&isSubmit)
    {
      console.log(formValues);
      nav('/payment')
    }
  },[formError])
  function validate(values){
    const errors={}
    if(!values.name)
    {
      errors.name="Name is Required"
    }
    if(!values.phone)
    {
      errors.phone="Mobile Number is Required"
    }
    if(!values.house)
    {
      errors.house="House is Required"
    }
    if(!values.area)
    {
      errors.area="Area is Required"
    }
    if(!values.pincode)
    {
      errors.pincode="Pincode is Required"
    }
    if(!values.landmark)
    {
      errors.landmark="Landmark is Required"
    }
    if(!values.town)
    {
      errors.town="Town is Required"
    }
    if(!values.state)
    {
      errors.state="State is Required"
    }
    return errors;
  }

  return (
    
    <div className='mt-5 container'>
        <h2 className='text-center'>CheckOut</h2>
        <Form onSubmit={handleFormSubmit}>
        {/* {!isValid&&<p className='text-danger'>Name is required</p>} */}
          <FloatingLabel
          controlId="floatingInput"
          label="Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Name" name="name" value={formValues.name} onChange={handleChange}/>
          
        </FloatingLabel>
        <p className='text-danger'>{formError.name}</p>
        
        <FloatingLabel
          controlId="floatingInput"
          label="Mobile Number"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Mobile Number" name="phone" value={formValues.phone} onChange={handleChange}/>
          
        </FloatingLabel>
        <p className='text-danger'>{formError.phone}</p>
        <FloatingLabel
          controlId="floatingInput"
          label="Flat, House no., Building"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Flat, House no., Building" name="house" value={formValues.house} onChange={handleChange}/>
          <p className='text-danger'>{formError.house}</p>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Area,Street,Village"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Area,Street,Village" name="area" value={formValues.area} onChange={handleChange}/>
          <p className='text-danger'>{formError.area}</p>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Landmark"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Landmark" name="landmark" value={formValues.landmark} onChange={handleChange}/>
          <p className='text-danger'>{formError.landmark}</p>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Pincode"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Pincode" name="pincode" value={formValues.pincode} onChange={handleChange}/>
          <p className='text-danger'>{formError.pincode}</p>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Town/City"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Town/City" name="town" value={formValues.town} onChange={handleChange}/>
          <p className='text-danger'>{formError.town}</p>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="State"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="State" name="state" value={formValues.state} onChange={handleChange}/>
          <p className='text-danger'>{formError.state}</p>
        </FloatingLabel>
        <button className='btn btn-warning mb-5' type="submit">Deliver to this address</button>
        </Form>
    </div>
  )
}

export default Checkout