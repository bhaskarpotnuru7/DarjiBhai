import {Component} from 'react'
import Cart from './cart.js'
import './ninthpage.css'

class NinthPage extends Component{
    render(){
        return(
            <>
            <div className = "ninth-page-container">
                <Cart /> 
            <div className = "ninth-page-address-container"> 
                    <div className = "ninth-page-shipping-address">
                        <h1>Ship to:</h1>
                        <h1>Bhaskara Rao Potnuru</h1>
                        <p>Plot #14, Road no.12, Spring Field Colony...</p>
                        <button>Change shipping address</button>
                        <div className = "ninth-page-order-completion">
                        <h1>Payment:</h1>
                        <p><span>26, 709.00 INR</span><br />All transactions are secure and encrypted</p>
                        <h1>Proceed to the payment & complete the order</h1>
                    </div> 
                    </div>
            <div>                            
                <div className = "ninth-page-bottom-container">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className = "ninth-page-checkout-button-container">
                    <button>Complete Order</button>
                </div>
            </div>
                    
            </div>
        </div>

            </>
        )
    }
}

export default NinthPage