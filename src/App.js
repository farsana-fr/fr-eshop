
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

function App() {  
  const [cart,setCart]=useState([]);
  const [wish,setWish]=useState([]);
  return (
    <div className="App ">
      <Header cart={cart} wish={wish}></Header>
      
      
      <Routes>
        <Route path='/view/:id' element={<View cart={cart} onChange={setCart}></View>}></Route>
        <Route path='/dash' element={<Dashboard cart={cart} onChange={setCart} wish={wish} setWish={setWish}></Dashboard>}></Route>
        <Route path='/' element={<Dashboard cart={cart} onChange={setCart} wish={wish} setWish={setWish}></Dashboard>}></Route>
        <Route path='/cart' element={<Cart cart={cart} onChange={setCart}></Cart>}></Route>
        <Route path='/wishlist' element={<WishList wish={wish} setWish={setWish}></WishList>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/payment' element={<Payment cart={cart}></Payment>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
