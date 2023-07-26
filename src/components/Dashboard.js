import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Dashboard({cart,onChange,wish,setWish}) {

    const [prod,setProd]=useState([])

    console.log(cart.length);
  const getProducts=async()=>{
    const res=await fetch('https://dummyjson.com/products');
    res.json().then((data)=>{
    console.log(data.products);
    setProd(data.products);
    console.log(prod);
        })
    }

    function addToCart(id,title,price,image){
      console.log("ADD TOCART");
      const item={id:id,name:title,price:price,image:image}
      let i=0;
      for(;i<cart.length;i++)
      {
        if(cart[i].id==id)
        {
          cart[i].qty++;
          break;
        }
      }
      console.log(i);
      console.log(cart.length);
      if(i==cart.length){
        item.qty=1;
        onChange([...cart,item]);
      }
     
    }

    function addToWishList(id,name,image){
      
      
      var element = document.getElementsByClassName("fa-heart");
      if(element[id-1].classList.contains("fa-regular"))
      {

        element[id-1].classList.remove("fa-regular");
        element[id-1].classList.add("fa-solid");
        element[id-1].classList.add("text-danger");
        let i=0;
        for(;i<wish.length;i++)
        {
          if(wish[i].id==id)
          {
            break;
          }
        }
        if(i==wish.length)
        {
          const item={id,name,image};
          setWish([...wish,item]);
        }
      }
      else
      {
        element[id-1].classList.add("fa-regular");
        element[id-1].classList.remove("fa-solid");
        wish.splice(id-1,1);
        setWish([...wish])
      }
      
   
   
  console.log(element[id]);
    }
    console.log(wish);
    useEffect(()=>{
        getProducts();
      },[])
  return (
    <div>
        <div className='allProducts mt-5'>
        {prod.length>0?(
        prod.map(p=>( 
          
          
               <div className='products rounded-3 p-1'>
                
                <Link to={`/view/${p.id}`} className='text-none'><img src={p.thumbnail} className="rounded-3 border border-dark" height="200px" width="100%"/>
                
                  <div className="product-header">
                  <h4 >{p.title}</h4>
                    <h5 >$.{p.price}</h5>
                  </div>
                  </Link>
                  <div className='product-footer'>
                    <button className=" btn btn-outline-dark" onClick={()=>addToCart(p.id,p.title,p.price,p.thumbnail)}><i class="fa-solid fa-cart-plus" ></i>Add To Cart</button>
                    <i className="ms-auto fa-regular fa-heart fs-5 " onClick={()=>addToWishList(p.id,p.title,p.thumbnail)}></i>
                  </div>
                  
              </div>
          
           
          
        )
        )
       ):""}
      </div>

    </div>
  )
}

export default Dashboard