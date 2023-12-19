import React from 'react'
import {Component} from 'react'
import Cart from './cart.js'
import './eighthpage.css'

class EighthPage extends Component{
    render(){
        return(
            <>
            <div className = "eighth-page-container">
                <Cart /> 
            <div className = "eighth-page-address-container"> 
                    <div className = "eighth-page-shipping-address">
                        <h1>Ship to:</h1>
                        <h1>Bhaskara Rao Potnuru</h1>
                        <p>Plot #14, Road no.12,<br />Spring Field Colony, Jubliee Hills, Hyderabad.<br/><span>Pincode</span>: 500067</p>
                        <p><span>M:</span>7095705497, <span>E: </span>bhaskarpotnuru7095@gmail.com</p>
                        <button>Change shipping address</button>
                        <div>
                        <h1>Order Information</h1>
                        <p>Subtotal for total of 3 Items<span className = "eighth-page-total-price-details1">:</span>22,500.00</p>
                        <p>Discount<span className = "eighth-page-total-price-details2">:</span>0.00</p>
                        <p>Total Amount<span className = "eighth-page-total-price-details3">:</span>22,500.00</p>
                        <hr className = "eighth-page-horizontal-line"/>
                        <p>GST (18%)<span className = "eighth-page-total-price-details4">:</span>4,059.00</p>
                        <p>Shipping Charges<span className = "eighth-page-total-price-details5">:</span>150.00</p>
                        <hr className = "eighth-page-horizontal-line"/>
                        <div className = "eighth-page-total-price"> 
                        <h1>Total payable amount<span className = "eighth-page-total-price-details6">:</span>26,709.00</h1>
                        </div>
                        </div>

                    </div>                     
                <div>
                <div className = "eighth-page-bottom-container">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className = "eighth-page-checkout-button-container">
                    <button>Place Order
                    <i className ="fa-solid fa-arrow-right-long eighth-page-checkout-arrow-icon"></i>
                    </button>
                </div>
                </div>

            </div>
            </div>

            </>
        )
    }
}

export default EighthPage