import React, { useEffect, useState } from 'react'
import './CartWish.css'
import { FloatingLabel, Form } from 'react-bootstrap';

function Payment({cart}) {
    const [total,setTotal]=useState(0)
    function calcTotal()
    {
      let i=0,t=0;
        for(;i<cart.length;i++)
        {
          t+=cart[i].price*cart[i].qty;
        }
        setTotal(t);
    }
    useEffect(()=>{

        calcTotal();
           },[]);
  return (
    <div className='container priceDet mt-5 mb-2'>
        <div className=''>
            <h3>Price <br />${total}</h3>
            {cart?cart.map(c=>(
                <div className='p-3 details'>
                    <img src={c.image} alt="" height="50px" />
                    <div className='name'>{c.name}
                    <p>Qty:{c.qty}</p>
                    
                    </div>
                     <div className='ms-5'>{c.price*c.qty}</div>
                    
                </div>
                
            )):""}
            
        </div>
        <div>
            <h3>Payment Details</h3>
            <Form>
        <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Card Information</Form.Label>
            <Form.Control type="text" placeholder="0000 0000 0000 0000" />
            <Form.Control type="text" placeholder="Expiry MM/YY" />
            <Form.Control type="text" placeholder="CVV" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Name on Card</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Enter country" />
        </Form.Group>
        </Form>
        <button className='btn btn-primary container'>Pay</button>
        </div>  
        

        
    </div>
  )
}

export default Payment