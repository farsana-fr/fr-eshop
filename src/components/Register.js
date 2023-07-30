import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

function Register() {
    const [formValues,setFormValues]=useState({email:"",pwd:""});
    const [formError,setFormError]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    function handleChange(e)
    {
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value})
    }
    function handleFormSubmit(e)
    {
        e.preventDefault();
        setFormError(validate(formValues));
        setIsSubmit(true);
        // localStorage.setItem("username",formValues.name)
    }
    function validate(values)
    {
        const errors={}
        if(!values.email)
        {
            errors.email="Email is Required"
        }
        if(!values.pwd)
        {
            errors.pwd="Password is Required"
        }
        return errors;
    }
    useEffect(()=>{
        if(isSubmit && Object.keys(formError).length===0)
        {

        }
    },[formError])

  return (
    <div className='container'><h2 className='text-center'>Register</h2>
        <Form onSubmit={handleFormSubmit}>
        {/* {!isValid&&<p className='text-danger'>Name is required</p>} */}
          <FloatingLabel
          controlId="floatingInput"
          label="Full Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Name" name="name" value={formValues.name} onChange={handleChange}/>
          
        </FloatingLabel>
          <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="Email" name="email" value={formValues.email} onChange={handleChange}/>
          
        </FloatingLabel>
        <p className='text-danger'>{formError.email}</p>
        
        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" name="pwd" value={formValues.pwd} onChange={handleChange}/>
          
        </FloatingLabel>
        <p className='text-danger'>{formError.email}</p>
        <button type="submit" className='btn btn-success'>Register</button>
        </Form>
    
    </div>
  )
}

export default Register