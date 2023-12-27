import React from 'react'
import { useState } from 'react'
import './cartitem.css'


const CartItem = props =>{
    const {cartItemDetails} = props
    const {imageUrl,name,price} = cartItemDetails

    const [quantity,setQuantity] = useState(1)

    const onDecBtn = () =>{
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }


    return (
    <li className = "cart-item-container">
    <div className = "cart-item-details-container">
        <img src = {imageUrl} className = "cart-item-img" alt = {name}/>
        <p>{name}</p>
    </div>

    <div className = "cart-inc-dec-container">
        <button className = "cart-dec-button" onClick = {onDecBtn}>-</button>
        <p className = "cart-item-quantity">{quantity}</p>
        <button className = "cart-inc-button" onClick = {() =>setQuantity(quantity+1)}>+</button>
    </div>
    
    <p className = "cart-item-price-container">Rs.{quantity*price}</p>
    <button className = "cart-item-remove-button">X</button>
    </li>
    )
}

export default CartItem