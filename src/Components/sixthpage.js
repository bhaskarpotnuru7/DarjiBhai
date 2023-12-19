import React from 'react'
import {Component} from 'react'
import Cart from './cart.js'
import './sixthpage.css'

class SixthPage extends Component{
    render(){
        return(
            <>
            <div className = "sixth-page-container">
                <Cart /> 
            <div className = "sixth-page-address-container"> 
                <div className = "sixth-page-address">
                    <h1>Choose the shipping address</h1>
                    <p>Choose the address to ship</p>
                    <select className = "sixth-page-choose-address-options">
                        <option>Select the shipping address</option>
                        <option>Visakhapatnam</option>
                        <option>Hyderabad</option>
                        <option>Vijayawada</option>
                    </select>
                    <button>Add New Address</button>
                </div>
                <div>
                <div className = "sixth-page-bottom-container">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className = "sixth-page-checkout-button-container">
                    <button>Check out
                    <i className ="fa-solid fa-arrow-right-long sixth-page-checkout-arrow-icon"></i>
                    </button>
                </div>
                </div>
            </div>


            </div>
            </>
        )
    }
}

export default SixthPage