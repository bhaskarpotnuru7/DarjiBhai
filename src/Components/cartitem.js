import React from 'react'
import CartContext from '../Context/cartContext'
import './cartitem.css'


const CartItem = props =>(

<CartContext.Consumer>
    {value =>{
        const {deleteCartItem,updateIncrementQuantity,updateDecrementQuantity} = value
        const {cartItemDetails} = props
        const {id,imageUrl,name,price,quantity} = cartItemDetails

        const onDeleteCartItem = () =>{
            deleteCartItem(id)
        }

        const onIncBtn = () =>{
            updateIncrementQuantity(id)
        }

        const onDecBtn = () =>{
            updateDecrementQuantity(id)
        }

        return (
            <li className = "cart-item-container">
            <div className = "cart-item-details-container">
                <img src = {imageUrl} className = "cart-item-img" alt = {name}/>
                <div className = "cart-item-details">
                <p>{name.substring(0,32)}...</p>
                <p>Rs.{price}/-</p>
                </div>
            </div>
        
            <div className = "cart-inc-dec-container">
                <button className = "cart-dec-button" onClick = {onDecBtn}>-</button>
                <p className = "cart-item-quantity">{quantity}</p>
                <button className = "cart-inc-button" onClick = {onIncBtn}>+</button>
            </div>
            
            <p className = "cart-item-total-price">Rs.{quantity*price}</p>
            <button className = "cart-item-remove-button" onClick = {onDeleteCartItem}>
            <i className ="fa-solid fa-trash"></i>
            </button>
            </li>
            )

    }}
</CartContext.Consumer>

)

export default CartItem