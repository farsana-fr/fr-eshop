import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './View.css'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
function View({cart,onChange,addToCart}) {


   const params=useParams();
   const [details,setDetails]=useState({});
   const viewProduct=async()=>{
    const res=await fetch(`https://dummyjson.com/products/${params.id}`)
    res.json().then(data=>{
        console.log(data);
        setDetails(data);
    });
   }
   useEffect(()=>{
viewProduct();
   },[]);

  //  function addToCart(id,title,price,image){
  //   const item={id:id,name:title,price:price,image:image}
  //   let i=0;
  //   for(;i<cart.length;i++)
  //   {
  //     if(cart[i].id==id)
  //     {
  //       cart[i].qty++;
  //     }
  //   }
  //   if(i==cart.length){
  //     item.qty=1;
  //     onChange([...cart,item]);
  //   }
   
  // }
   console.log(cart.length);
  return (

    <div className='mt-5 mb-5'>
        {
            details!=null?(
                <div className='viewProd'>
                    <img src={details.thumbnail} alt="Product Thumbnail" height='300px' className='ms-4'/>
                
        <div className='prodDesc ms-5'>
        <h3>{details.description}</h3>
            <p><strong>Brand:</strong> {details.brand}</p>
            
            <hr />
            <strong className='fs-2'>- {details.discountPercentage}%</strong>
            <strong className='ms-5 fs-1'> $.{details.price}</strong>
            <p>MRP: <s>$.{Math.round(details.price+details.price*(details.discountPercentage/100))}</s></p>
            <p>Inclusive of all taxes</p>
            <hr />

            <button className=" btn btn-outline-dark" onClick={()=>addToCart(details.id,details.title,details.price,details.thumbnail)}><i class="fa-solid fa-cart-plus" ></i>Add To Cart</button>
            {/* <button className="ms-5 btn btn-success"><i class="fa-solid fa-cart-plus"></i>Buy Now</button> */}
            {/* <p>Stock: {details.stock}</p> */}
            {/* <p>Rating: {details.rating}</p>
            <p>Category: {details.category}</p> */}
            {/* <img src={details.images[0]} alt="" width="150px" />
            <img src={details.images[2]} alt="" width="150px" />
            <img src={details.images[3]} alt="" width="150px" /> */}
        </div>
        </div>
            ):""
        }
        
    </div>
  )
}

export default View