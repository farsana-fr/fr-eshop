import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import './CartWish.css'
import { Link } from 'react-router-dom';
function Cart({cart,onChange}) {

    const [total,setTotal]=useState(0)
    console.log(cart);
    const viewCart=async()=>{
        const res=await fetch('https://dummyjson.com/products');
        res.json().then((data)=>{ 
        console.log(data.products);
            })
    }
    function calcTotal()
    {
      let i=0,t=0;
        for(;i<cart.length;i++)
        {
          t+=cart[i].price*cart[i].qty;
        }
        setTotal(t);
    }
    function removeFromCart(id){
        let i=0;
        for(;i<cart.length;i++)
        {
            
            if(cart[i].id==id)
            {
                if(cart[i].qty>1)
                {
                    cart[i].qty--;
                }
                else{
                    cart.splice(i,1);
                }
            }
        }
        onChange([...cart]);
    }
       useEffect(()=>{
    viewCart();
    calcTotal();
       },[]);
  return (
    <div className='mt-5'>
        <h2 className='text-center'>Shopping Cart</h2>
    <Table bordered hover size="sm" className='container mt-5'>
    
      <thead>
        <tr>

          <th>Product</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
 
    <tbody>{cart?(
cart.map(c=> 
    
        <tr>
          <td>
          <img src={c.image} alt="image" width="180px"/>
            {c.name}</td>
          <td>{c.qty}</td>
          <td>{c.price}</td>
          <td>{c.price*c.qty}</td>
          <td><button className="btn btn-danger" onClick={()=>removeFromCart(c.id)}>Remove(1)</button></td>
        </tr>
    )
      
    ):""}
    <tr>
      <th>Subtotal</th>
      <th></th>
      <th></th>
      <th>{total}</th>
      <th></th></tr>  </tbody>

    </Table>
    <Link to='/checkout'><button className="ms-5 p-3 btn btn-success">Proceed to Checkout</button></Link>
    </div>
    
  )

}

export default Cart