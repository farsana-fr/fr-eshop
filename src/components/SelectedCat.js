import React from 'react'
import { Link } from 'react-router-dom'

function SelectedCat({prod}) {
    console.log(prod);
  return (
    <div className='allItems'>
       
        {prod?(prod.map(p=>
                ( 
          
          
                    <div className='products rounded-3 p-1'>
                     
                     <Link to={`/view/${p.id}`} className='text-none'><img src={p.thumbnail} className="rounded-3 border border-dark" height="200px" width="100%"/>
                     
                       <div className="product-header">
                       <h4 >{p.title}</h4>
                         
                       </div>
                       </Link>
                       <div className='product-footer'>
                       <h5 >$.{p.price}</h5>
                       </div>
                       
                   </div>
               
                
               
             )
                )):""}
    </div>
  )
}

export default SelectedCat