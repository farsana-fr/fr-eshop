import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [formValues,setFormValues]=useState({email:"",pwd:""});
    const [formError,setFormError]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const nav=useNavigate();
    function handleChange(e)
    {
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value})
    }
    function handleFormSubmit()
    {
        setFormError(validate(formValues));
        setIsSubmit(true);
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
            localStorage.setItem("email",formValues.email);
            nav(`/dash/${formValues.email}`)
        }
    },[formError])
    console.log(formValues);
  return (
    <div className='container mt-5 mb-5'><h2 className='text-center'>Login</h2>
    <Form onSubmit={handleFormSubmit}>
        {/* {!isValid&&<p className='text-danger'>Name is required</p>} */}
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
        <button type="submit" className='btn btn-success'>Login</button>
        <div className='fs-4'>Not Registered?<Link to='/register' className='text-primary fs-3'>Register</Link></div>
        </Form>
    </div>
  )
}

export default Login