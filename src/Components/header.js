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
      <Navbar className="nav-bg" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto m-auto">
            <Nav.Link href="#about" className = "m-3 mr-5">ABOUT</Nav.Link>
            <Nav.Link href="#shop" className = "m-3 mr-5">SHOP</Nav.Link>
            <Navbar.Brand className = "logo-name m-auto">DB</Navbar.Brand>
            <Nav.Link href="#customize" className = "m-3 ml-5 mr-5">CUSTOMIZE</Nav.Link>
            <Nav.Link href="#contactus" className = "m-3 mr-5">CONTACT US</Nav.Link>
            <Nav.Link href="#useraccount" className = "user-account m-auto mr-5 pr-5">U</Nav.Link>
            <i className="fa-solid fa-bag-shopping bag-icon"></i>
            <button className = "notification-count-button">3</button>
          </Nav>
        </Container>
      </Navbar>
            </>
        )
    }
}

export default Header