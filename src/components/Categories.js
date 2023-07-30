import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import SelectedCat from './SelectedCat';

function Categories() {
    const [ctgry,setCtgry]=useState();
    const [prod,setProd]=useState();
    const nav=useNavigate();
    const getCategories=async()=>{
        const res=await fetch(`https://dummyjson.com/products/categories`);
        res.json().then(data=>{
            console.log(data);
            setCtgry(data);
        })
    }
    const viewProd=async(cat)=>
    {
        console.log(cat);
        const res=await fetch(`https://dummyjson.com/products/category/${cat}`);
        res.json().then(data=>{
            setProd(data.products);
            //  nav('/selectedCat')
        })
    }
    useEffect(()=>{
        getCategories();
    },[])
  return (
    
    <div className='mt-5'>
        {/* <Routes>
                <Route path='/selectedCat' element={<SelectedCat prod={prod}></SelectedCat>}> </Route>
            </Routes> */}
            
        <h2 className='text-center'>Categories</h2>
        <SelectedCat prod={prod}></SelectedCat>
        <div className='allctgry'>
            {ctgry?(ctgry.map(c=>ctgry.indexOf(c)<6?<div className='border border-dark ctgry' onClick={()=>viewProd(c)}>{c}</div>:""  
            
            
            // <div className='border border-dark ctgry' onClick={()=>viewProd(c)}>{
            //     ctgry.indexOf(c)<6?c:""}</div>
            
        
            
            )):""}
            
            
            {/* {prod?(prod.map(p=>
                ( 
          
          
                    <div className='products rounded-3 p-1'>
                     
                     <Link to={`/view/${p.id}`} className='text-none'><img src={p.thumbnail} className="rounded-3 border border-dark" height="200px" width="100%"/>
                     
                       <div className="product-header">
                       <h4 >{p.title}</h4>
                         <h5 >$.{p.price}</h5>
                       </div>
                       </Link>
                       <div className='product-footer'>
                         <button className=" btn btn-outline-dark" ><i class="fa-solid fa-cart-plus" ></i>Add To Cart</button>
                         <i className="ms-auto fa-regular fa-heart fs-5 "></i>
                       </div>
                       
                   </div>
               
                
               
             )
                )):""} */}
        </div>
    </div>
  )
}

export default Categories