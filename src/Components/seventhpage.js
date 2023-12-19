import React from 'react'
import {Component} from 'react'
import Cart from './cart.js'
import './seventhpage.css'

class SeventhPage extends Component{
    render(){
        return(
            <>
            <div className = "seventh-page-container">
                <Cart /> 
            <div className = "seventh-page-address-container"> 
                <div className = "seventh-page-address">
                    <h1>Choose the shipping address</h1>
                    <p>Choose the address to ship</p>
                    <select className = "seventh-page-choose-address-options">
                        <option>Bhaskara Rao Potnuru</option>
                        <option>Visakhapatnam</option>
                        <option>Hyderabad</option>
                        <option>Vijayawada</option>
                    </select>
                    <div className = "seventh-page-shipping-address">
                        <h1>Ship to:</h1>
                        <h1>Bhaskara Rao Potnuru</h1>
                        <p>Plot #14, Road no.12,<br />Spring Field Colony, Jubliee Hills, Hyderabad.<br/>Pincode: 500067</p>
                        <p><span>M:</span>7095705497, <span>E: </span>bhaskarpotnuru7095@gmail.com</p>
                    </div>
                    <button>Add New Address</button>
                    <p className = "seventh-page-shopping-charge-details">Shipping charges for <span className = "seventh-page-shopping-charge-pincode">'500067'</span>:<span className = "seventh-page-shopping-charge-cost">150.00 INR</span></p>
                </div>
                <div>
                <div className = "seventh-page-bottom-container">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className = "seventh-page-checkout-button-container">
                    <button>Check out
                    <i className ="fa-solid fa-arrow-right-long seventh-page-checkout-arrow-icon"></i>
                    </button>
                </div>
                </div>
            </div>


            </div>
            </>
        )
    }
}

export default SeventhPage