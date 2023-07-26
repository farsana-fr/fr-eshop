import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    
    <div className='mt-5 container'>
        <h2 className='text-center'>CheckOut</h2>
        <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Mobile Number"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Mobile Number" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Flat, House no., Building"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Flat, House no., Building" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Area,Street,Village"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Area,Street,Village" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Landmark"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Landmark" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Pincode"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Pincode" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Town/City"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Town/City" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="State"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="State" />
      </FloatingLabel>
      <Link to='/payment'><button className='btn btn-warning mb-5'>Deliver to this address</button></Link>
    </div>
  )
}

export default Checkout