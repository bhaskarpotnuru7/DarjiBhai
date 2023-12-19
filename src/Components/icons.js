import React from 'react'
import {Component} from 'react'
import './icons.css'

class Icons extends Component{
    render(){
        return(
            <>
                    <div className="icon-container">
                        <div className="custom-icon">
                            <i className="fa-solid fa-location-dot process-icon"></i>
                            <p className="icon-desc">OUR PROFESSIONAL <br />
                                <span>visits your place</span>
                            </p>
                        </div>
                        <i className="fa-solid fa-arrow-right-long arrow-icon"></i>
                        <div className="custom-icon">
                            <i className="fa-sharp fa-solid fa-tape process-icon"></i>
                            <p className="icon-desc">MEASUREMENTS</p>
                        </div>
                        <i className="fa-solid fa-arrow-right-long arrow-icon"></i>
                        <div className="custom-icon">
                            <i className="fa-solid fa-holly-berry process-icon"></i>
                            <p className="icon-desc">EMBROIDERY</p>
                        </div>
                        <i className="fa-solid fa-arrow-right-long arrow-icon"></i>
                        <div className="custom-icon">
                            <i className="fa-solid fa-scissors process-icon"></i>
                            <p className="icon-desc">CUTTING</p>
                        </div>
                        <i className="fa-solid fa-arrow-right-long arrow-icon"></i>
                        <div className="custom-icon">
                            <i className="fa-solid fa-shirt process-icon"></i>
                            <p className="icon-desc">STITCHING</p>
                        </div>
                        <i className="fa-solid fa-arrow-right-long arrow-icon"></i>
                        <div className="custom-icon">
                            <i className="fa-solid fa-truck-fast process-icon"></i>
                            <p className="icon-desc text-center">FREE DELIVERY <br />
                                <span>at your place</span>
                            </p>
                        </div>
                    </div>
            </>
        )
    }
}

export default Icons