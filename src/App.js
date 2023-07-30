
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import Header from './Header';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import View from './components/View';
import Cart from './components/Cart';
import WishList from './components/WishList';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Complete from './components/Complete';
import Categories from './components/Categories';

function App() {  
  const [cart,setCart]=useState([]);
  const [wish,setWish]=useState([]);
  const [prod,setProd]=useState([]);
  function clearCart()
  {
    setCart([]);
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
      setCart([...cart,item]);
    }
   
  }
  return (
    <div className="App ">
      <Header cart={cart} wish={wish} prod={prod} setProd={setProd}></Header>
      
      
      <Routes>
        <Route path='/view/:id' element={<View cart={cart} onChange={setCart}  addToCart={addToCart}></View>}></Route>
        {/* <Route path='/dash' element={<Dashboard cart={cart} onChange={setCart} wish={wish} setWish={setWish}></Dashboard>}></Route> */}
        <Route path='/' element={<Dashboard cart={cart} onChange={setCart} wish={wish} setWish={setWish} addToCart={addToCart} prod={prod} setProd={setProd}></Dashboard>}></Route>
        <Route path='/dash/:email' element={<Dashboard cart={cart} onChange={setCart} wish={wish} setWish={setWish} addToCart={addToCart} prod={prod} setProd={setProd}></Dashboard>}></Route>
        <Route path='/cart' element={<Cart cart={cart} onChange={setCart} ></Cart>}></Route>
        <Route path='/wishlist' element={<WishList wish={wish} setWish={setWish}></WishList>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/payment' element={<Payment cart={cart}></Payment>}></Route>
        <Route path='/success' element={<Complete clearCart={clearCart}></Complete>}></Route>
        <Route path='/category' element={<Categories></Categories>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
