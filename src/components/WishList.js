import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import './CartWish.css'
import { Link } from 'react-router-dom';

function WishList({wish,setWish}) {
    console.log(wish);
    function removeFromWish(id)
    {
        let i=0;
        for(;i<wish.length;i++)
        {
            if(wish[i].id==id)
            {
                wish.splice(i,1);
                setWish([...wish]);
            }
        }
    }
  return (
   <div className='mt-5 container'>
    <h3 className='text-center'>Wishlist</h3>
    <div className='wishlist'>
        
        {wish.length>0?(wish.map(w=>(
            
        
            <div className='products p-5'>
                <img src={w.image} alt="" height="100px" width="100%"/>
                <p>{w.name}</p>
                <button className='btn btn-danger' onClick={()=>removeFromWish(w.id)}>Remove</button>
            </div>
        
      ))):""}
      </div>
   </div>
  )
}

export default WishList