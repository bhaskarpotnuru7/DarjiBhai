import {Component} from 'react'
import Header from './header.js'
import Footer from './footer.js'
import './eleventhpage.css'

class EleventhPage extends Component{
    render(){
        return(
            <>
                <Header />
                <div className = "eleventh-page-top-container">
                    <h1>MY ACCOUNT / ORDERS / DB8092-23</h1>
                    <p>Full information with order processing tracking update</p>
                    <hr className = "eleventh-page-horizontal-line"/>
                </div>
                <div className = "eleventh-page-middle-container">
                    <p>We are still processing your order. We stand at the below progress...</p>


                    <div className="icon-container">
                        <div className="custom-icon">
                            <i class="fa-solid fa-circle-check tick-icon"></i>
                            <i className="fa-solid fa-location-dot process-icon"></i>
                            <p className="icon-desc">OUR PROFESSIONAL <br />
                                <span>visits your place</span>
                            </p>
                        </div>
                        <i className="fa-solid fa-arrow-right-long arrow-icon"></i>
                        <div className="custom-icon">
                            <i class="fa-solid fa-circle-check tick-icon"></i>
                            <i className="fa-sharp fa-solid fa-tape process-icon"></i>
                            <p className="icon-desc">MEASUREMENTS</p>
                        </div>
                        <i className="fa-solid fa-arrow-right-long arrow-icon"></i>
                        <div className="custom-icon ">
                            <p className = "icon-in-process">...IN PROCESS</p>
                            <i className="fa-solid fa-holly-berry process-icon"></i>
                            <p className="icon-desc">EMBROIDERY</p>
                        </div>
                        <i className="fa-solid fa-minus arrow-icon"></i>
                        <div className="custom-icon">
                            <i className="fa-solid fa-scissors process-icon mt-4"></i>
                            <p className="icon-desc">CUTTING</p>
                        </div>
                        <i className="fa-solid fa-minus arrow-icon"></i>
                        <div className="custom-icon">
                            <i className="fa-solid fa-shirt process-icon mt-4"></i>
                            <p className="icon-desc">STITCHING</p>
                        </div>
                        <i className="fa-solid fa-minus arrow-icon"></i>
                        <div className="custom-icon">
                            <i className="fa-solid fa-truck-fast process-icon mt-4"></i>
                            <p className="icon-desc text-center">FREE DELIVERY <br />
                                <span>at your place</span>
                            </p>
                        </div>
                    </div>
                    <hr className = "eleventh-page-horizontal-line-2"/>
                    <i class="fa-regular fa-clock eleventh-page-clock-icon"></i>
                    <p className = "eleventh-page-footer-desc">Time is ticking. We are left with 20 Hours more...</p>

                    <Footer />

                </div>
            </>
        )
    }
}

export default EleventhPage