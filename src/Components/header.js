import React from 'react'
import {Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

class Header extends Component{
    render(){
        return(
            <>
      <Navbar className="nav-bg fixed-top" data-bs-theme="dark">
        <Container>
          <Nav className="m-auto">
          <Nav.Link href="/" className = "m-3 mr-5">HOME</Nav.Link>
            <Nav.Link href="/products" className = "m-3 mr-5">PRODUCTS</Nav.Link>  
            <Navbar.Brand className = "logo-name m-auto">DB</Navbar.Brand>
            <Nav.Link href="/customize" className = "m-3 ml-5 mr-5">CUSTOMIZE</Nav.Link>
            <Nav.Link href="/shop" className = "m-3 mr-5">SHOP</Nav.Link>
            <Nav.Link href="/useraccount" className = "user-account m-auto  pr-5">U</Nav.Link>
            <Nav.Link href="/cart" className = "cart-link m-auto">
            <i className="fas fa-shopping-cart cart-link-icon"></i>
            </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
            </>
        )
    }
}

export default Header