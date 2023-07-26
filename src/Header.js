import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({cart,wish}) {
  
  return (
    <div>
     
    <Navbar expand="lg" className="bg-body-tertiary bg-secondary ">
      <Container fluid>
        <Navbar.Brand href="/" className='text-light'>
            eShop
            
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="#action1"  className='text-light text-decoration-none'>Categories</Link>
            
          
          <Form className="d-flex ms-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
            <Button variant="warning">Search</Button>
                <Link to="/cart" className='ms-2 me-2 text-light text-decoration-none'>Cart<sup className='fs-5'>{cart.length}</sup></Link>
                <Link to="/wishlist"  className='text-light text-decoration-none'>Wishlist<sup className='fs-5'>{wish.length}</sup></Link>
                
           
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header