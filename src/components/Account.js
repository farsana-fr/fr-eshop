import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Account() {
    const params=useParams();
    const [user,setUser]=useState();
    const nav=useNavigate();
    useEffect(()=>{
        setUser(params.email);
        console.log(user);
        if(!user)
        {
            nav('/login')
        }
    },[])
    console.log(user);
  return (
    <div><h2 className='text-center'> My Account</h2>
    {user?(<div>Welcome {user}</div>):
    ""}
    </div>
  )
}

export default Account