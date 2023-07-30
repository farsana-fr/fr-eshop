import React, { useEffect, useState ,Component} from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import ExampleCarouselImage from 'components/ExampleCarouselImage'
function Dashboard({cart,onChange,wish,setWish,addToCart,prod,setProd}) {

    

    console.log(cart.length);
  const getProducts=async()=>{
    const res=await fetch('https://dummyjson.com/products');
    res.json().then((data)=>{
    console.log(data.products);
    setProd(data.products);
    console.log(prod);
        })
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
        element[id-1].classList.remove("text-danger");
        let i=0;
        for(;i<wish.length;i++)
        {
          if(wish[i].id==id)
          {
            break;
          }
        }
        wish.splice(i,1);
        setWish([...wish])
      }
      
   
   
  console.log(element[id]);
    }
    console.log(wish);
    useEffect(()=>{
        getProducts();
      },[])
  return (
    <div className=''>
                <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="w-100" 
          src='https://www.qed42.com/sites/default/files/styles/social_media/public/2022-02/Best%20Practices%20For%20eCommerce%20Website%20Design.png?itok=UiGZ73XD
          '
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100" 
          src='https://www.hostgator.com/blog/wp-content/uploads/2020/08/Types-of-eCommerce-Websites-1024x538.jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src='https://www.cloudways.com/blog/wp-content/uploads/Top-Ecommerce-Websites.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      <h2 className='text-center'>Products</h2>
        <div className='allProducts mt-5'>
        {prod.length>0?(
        prod.map(p=>( 
          
          
               <div className='products rounded-3 p-1'>
                
                <Link to={`/view/${p.id}`} className='text-none'><img src={p.thumbnail} className="rounded-3 border border-dark" height="200px" width="100%" alt='Product Image Broken! Reload page'/>
                
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