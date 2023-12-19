import React from 'react'
import {Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './secondpage.css'

class SecondPage extends Component{
    render(){
        return(
            <>
                <Navbar className="nav-bg" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto m-auto">
            <Nav.Link href="#about" className = "text-white m-3 mr-5">ABOUT</Nav.Link>
            <Nav.Link href="#shop" className = "text-white m-3 mr-5">SHOP</Nav.Link>
            <Navbar.Brand className = "logo-name m-auto">DB</Navbar.Brand>
            <Nav.Link href="#customize" className = "text-white m-3 ml-5 mr-5">CUSTOMIZE</Nav.Link>
            <Nav.Link href="#contactus" className = "text-white m-3 mr-5">CONTACT US</Nav.Link>
            <Nav.Link href="#userprofile" className = "user-profile-icon m-auto">
            <i class="fa-regular fa-user"></i>
            </Nav.Link>
          </Nav>
        </Container>
        </Navbar>

        <div className = "second-page-design-container">
                <h1>EMBRIODERY DESIGNS</h1>
                <p>Let us stylize your fabric with our embroidery designs</p>

                <div className = "second-page-container">
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701278368/Snapinsta.app_166119166_2847601868828289_7967734871745301227_n_1080_w8zwty.jpg" alt = "peacock-embroidery"/>
        <p>PEACOCK EMBROIDERY <br/>
        <span>Rs. 36000/- </span>
        </p>
                        </div>
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701278368/Snapinsta.app_289940872_2216909758459284_4876426278303560386_n_1080_jecpbu.jpg" alt = "signature-motif"/>
        <p>SIGNATURE MOTIF <br/>
        <span>Rs. 19000/- </span>
        </p>
                        </div>
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701263157/Snapinsta.app_369606506_1484906375696832_1296644159049811507_n_1080_noopdm.jpg" alt = "abc-work"/>
        <p>ABC WORK MOTIF <br/>
        <span>Rs. 8000/- </span>
        </p>
                        </div>
                </div>

                <div className = "second-page-container">
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701278368/Snapinsta.app_166119166_2847601868828289_7967734871745301227_n_1080_w8zwty.jpg" alt = "peacock-embroidery"/>
        <p>PEACOCK EMBROIDERY <br/>
        <span>Rs. 36000/- </span>
        </p>
                        </div>
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701278368/Snapinsta.app_289940872_2216909758459284_4876426278303560386_n_1080_jecpbu.jpg" alt = "signature-motif"/>
        <p>SIGNATURE MOTIF <br/>
        <span>Rs. 19000/- </span>
        </p>
                        </div>
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701263157/Snapinsta.app_369606506_1484906375696832_1296644159049811507_n_1080_noopdm.jpg" alt = "abc-work"/>
        <p>ABC WORK MOTIF <br/>
        <span>Rs. 8000/- </span>
        </p>
                        </div>
                </div>

                <div className = "second-page-container">
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701278368/Snapinsta.app_166119166_2847601868828289_7967734871745301227_n_1080_w8zwty.jpg" alt = "peacock-embroidery"/>
        <p>PEACOCK EMBROIDERY <br/>
        <span>Rs. 36000/- </span>
        </p>
                        </div>
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701278368/Snapinsta.app_289940872_2216909758459284_4876426278303560386_n_1080_jecpbu.jpg" alt = "signature-motif"/>
        <p>SIGNATURE MOTIF <br/>
        <span>Rs. 19000/- </span>
        </p>
                        </div>
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701263157/Snapinsta.app_369606506_1484906375696832_1296644159049811507_n_1080_noopdm.jpg" alt = "abc-work"/>
        <p>ABC WORK MOTIF <br/>
        <span>Rs. 8000/- </span>
        </p>
                        </div>
                </div>

                <div className = "second-page-container">
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701278368/Snapinsta.app_166119166_2847601868828289_7967734871745301227_n_1080_w8zwty.jpg" alt = "peacock-embroidery"/>
        <p>PEACOCK EMBROIDERY <br/>
        <span>Rs. 36000/- </span>
        </p>
                        </div>
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701278368/Snapinsta.app_289940872_2216909758459284_4876426278303560386_n_1080_jecpbu.jpg" alt = "signature-motif"/>
        <p>SIGNATURE MOTIF <br/>
        <span>Rs. 19000/- </span>
        </p>
                        </div>
                    <div className = "second-page-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701263157/Snapinsta.app_369606506_1484906375696832_1296644159049811507_n_1080_noopdm.jpg" alt = "abc-work"/>
        <p>ABC WORK MOTIF <br/>
        <span>Rs. 8000/- </span>
        </p>
                        </div>
                </div>

            </div>

            <div className = "second-page-button-container">
                <button>LOAD MORE</button>
            </div>
            </>
        )
    }
}

export default SecondPage