import {Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './footer.js';
import './firstpage.css'

class FirstPage extends Component{
    render(){
        return(
            <>
        <div>
            <div className = "first-page-container">
    <Navbar className="nav-bg" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto m-auto">
            <Nav.Link href="#about" className = "text-dark m-3 mr-5">ABOUT</Nav.Link>
            <Nav.Link href="#shop" className = "text-dark m-3 mr-5">SHOP</Nav.Link>
            <Navbar.Brand className = "logo-name m-auto">DarjiBhai</Navbar.Brand>
            <Nav.Link href="#customize" className = "text-dark m-3 ml-5 mr-5">CUSTOMIZE</Nav.Link>
            <Nav.Link href="#contactus" className = "text-dark m-3 mr-5">CONTACT US</Nav.Link>
            <Nav.Link href="#userprofile" className = "user-profile-icon m-auto">
            <i class="fa-regular fa-user"></i>
            </Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <div className="main-container">
        <div className="home-page-container">
            <h1 className="brand-name">DarjiBhai</h1>
            <div className="container">
                <p>PERSONALISED</p>
                <p>CUSTOM</p>
                <p>EMBRIODERY & SEWING</p>
                <p>Checkout all new Classy & Fabulous designs by<span>DB</span>Collections
                </p>
            </div>
            <div className="homepage-button-container">
                <button>SHOP NOW <i class="fa-solid fa-caret-right"></i></button>
                <button>CUSTOMIZE <i class="fa-solid fa-caret-right"></i></button>
            </div>
        </div>
        <img src="https://res.cloudinary.com/dosckylqx/image/upload/v1701273140/Bazaart_20231129_091934_704_dxibik.png" alt = "mage"/>
    </div>
    <div className = "description-container">
        <h1 className = "brand-name">DarjiBhai</h1>
        <h2>Personalised Custom Embriodery & Sewing</h2>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it 
           over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
           Latin words, consectetur</p>
    </div>
        
    <div className="card-container">
        <div className="card-1">
            <p>Classy & Fabulous<br />collection</p>
            <button>SHOP NOW <i class="fa-solid fa-caret-right"></i></button>
        </div>

        <div className="card-2">
            <p>Top Class Custom <br /> Embriodery Services</p>
            <button>CUSTOMIZE <i class="fa-solid fa-caret-right"></i></button>
        </div>
    </div>
        
        </div>

            <div className = "second-section-container">
                <h1>OUR COLLECTION</h1>
                <p>Let's shop our fabulous and classy stuff</p>
            </div>

            <div className="collection-container">
        <div className="lehenga-collection">
            <p>LEHENGA</p>
        </div>
        <div>
            <div className="blouse-collection">
                <p>BLOUSES</p>
            </div>
            <div className="dress-material-collection">
                <p>DRESS MATERIAL</p>
            </div>
        </div>
        <div className="saree-collection">
            <p>SAREES</p>
        </div>
    </div>

            <div className = "customization-container">
                <h1>CUSTOMIZATION</h1>
                <p>Let us stylize your fabric with our embroidery designs</p>

                <div className = "bottom-section-container">
                    <div className = "bottom-section-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701278368/Snapinsta.app_166119166_2847601868828289_7967734871745301227_n_1080_w8zwty.jpg" alt = "peacock-embroidery"/>
        <p>PEACOCK EMBROIDERY <br/>
        <span>Rs. 36000/- </span>
        </p>
                        </div>
                    <div className = "bottom-section-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701278368/Snapinsta.app_289940872_2216909758459284_4876426278303560386_n_1080_jecpbu.jpg" alt = "signature-motif"/>
        <p>SIGNATURE MOTIF <br/>
        <span>Rs. 19000/- </span>
        </p>
                        </div>
                    <div className = "bottom-section-image-container">
        <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1701263157/Snapinsta.app_369606506_1484906375696832_1296644159049811507_n_1080_noopdm.jpg" alt = "abc-work"/>
        <p>ABC WORK MOTIF <br/>
        <span>Rs. 8000/- </span>
        </p>
                        </div>
                </div>

            </div>
                <Footer />
        </div>
            </>
        )
    }
}

export default FirstPage