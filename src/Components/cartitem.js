import React from 'react'
import CartContext from '../Context/cartContext'
import './cartitem.css'


const CartItem = props =>(

<CartContext.Consumer>
    {value =>{
        const {deleteCartItem} = value
        const {cartItemDetails} = props
        const {id,imageUrl,name,price,quantity} = cartItemDetails

        const onDeleteCartItem = () =>{
            deleteCartItem(id)
        }

        return (
            <li className = "cart-item-container">
            <div className = "cart-item-details-container">
                <img src = {imageUrl} className = "cart-item-img" alt = {name}/>
                <div className = "cart-item-details">
                <p>{name}</p>
                <p>Rs.{price}/-</p>
                </div>
            </div>
        
            <div className = "cart-inc-dec-container">
                <button className = "cart-dec-button">-</button>
                <p className = "cart-item-quantity">{quantity}</p>
                <button className = "cart-inc-button">+</button>
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