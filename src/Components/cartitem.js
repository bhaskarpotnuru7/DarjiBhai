import React from 'react'
import IncAndDec from './incanddec'
import './cartitem.css'


const CartItem = props =>{
    const {cartItemDetails} = props
    const {imageUrl,name,price} = cartItemDetails

    return (
    <li className = "cart-item-container">
    <div className = "cart-item-details-container">
        <img src = {imageUrl} className = "cart-item-img" alt = {name}/>
        <p>{name}</p>
    </div>

    <IncAndDec />
    
    <p className = "cart-item-price-container">Rs.{price}</p>
    <button className = "cart-item-remove-button">X</button>
    </li>
    )
}

export default CartItem