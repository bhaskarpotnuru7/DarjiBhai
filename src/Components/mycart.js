import React from 'react'
import {Component} from 'react'
import CartContext from '../Context/cartContext'
import './mycart.css'
import Header from './header'
import CartItem from './cartitem'
import EmptyCartView from './emptycartview'



class MyCart extends Component{

state = {cartList : [],quantity:1}

render(){
  
  return(
 <CartContext.Consumer>
      {value =>{
        const {cartList, removeAllCartItems} = value
        const showEmptyView = cartList.length === 0
        const onRemoveCartItems = () =>{
          removeAllCartItems()
        }

        let totalCartItemsPrice = 0
        cartList.forEach(eachItem =>{
          totalCartItemsPrice += eachItem.price * eachItem.quantity
        })

      return(
        <>
        <Header />

        {showEmptyView ? <EmptyCartView /> :
        <div className = "cart-container">
            <div className = "cart-container-one">
              <div className = "cart-list-top-container">
                <h1>My Cart</h1>
              <button className = "remove-all-button" onClick = {onRemoveCartItems}>Remove all</button>
            </div>
            <ul>
            {cartList.map(eachCartItem =>(
                <CartItem cartItemDetails = {eachCartItem} key = {eachCartItem.id}/>
              ))}

          </ul>
          </div>

          <div className = "cart-container-two">
            <div className = "cart-order-details">
            <h1 className = "cart-order-details-head">Order Details</h1>
            <p className = "cart-order-total">Order Total: <span className = "cart-order-total-price">{totalCartItemsPrice}/-</span></p>
            <p className = "total-items-count">{cartList.length} items in Cart</p>
            <button className = "checkout-button bg-info">Check Out</button>
          </div>
          </div>
      
      </div>}

      </>
      )
    }}
  </CartContext.Consumer>)
}
}



export default MyCart