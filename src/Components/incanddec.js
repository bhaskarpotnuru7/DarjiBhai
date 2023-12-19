import React from 'react'
import {Component} from 'react'
import './incanddec.css'


class IncAndDec extends Component{
    state = {quantity: 1,}

    onIncButton = () =>{
        this.setState(prevState =>({quantity : prevState.quantity + 1}))
    }

    onDecButton = () =>{
        const {quantity} = this.state
        if(quantity > 1){
        this.setState(prevState =>({quantity : prevState.quantity - 1}))
        }
    }

    render(){
        const {quantity} = this.state
        return(
            <>
            <div className = "cart-inc-dec-container">
                <button className = "cart-dec-button" onClick = {this.onDecButton}>-</button>
                <p className = "cart-item-quantity">{quantity}</p>
                <button className = "cart-inc-button" onClick = {this.onIncButton}>+</button>
            </div>
            </>
        )
    }
}

export default IncAndDec