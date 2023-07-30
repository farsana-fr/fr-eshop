import React, { useEffect } from 'react'

function Complete({clearCart}) {
 clearCart();
  return (
    
    <div>
        <h1 className='mt-5 mb-5 container text-center text-success'>Order Placed</h1>
        <p className='text-center mb-5'><strong>You will receive your order within 3 working days</strong></p>
    </div>
  )
}

export default Complete