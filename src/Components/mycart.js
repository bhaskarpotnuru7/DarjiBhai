import React from 'react'
import {Component} from 'react'
import CartContext from '../Context/cartContext'
import './mycart.css'
import Header from './header'
import CartItem from './cartitem'



class MyCart extends Component{

state = {quantity:1}

onDecBtn = () =>{
  const {quantity} = this.state

  if(quantity > 1){
  this.setState(prevState =>({quantity : prevState.quantity - 1}))
  }
}

onIncBtn = () =>{
  this.setState(prevState =>({quantity : prevState.quantity + 1}))
}

render(){
  
  return(<>
    <Header />
 <CartContext.Consumer>
      {value =>{
          const {cartList} = value
          console.log(cartList)
      return(<ul>
        {cartList.map(eachCartItem =>(
            <CartItem cartItemDetails = {eachCartItem} key = {eachCartItem.id}/>
          ))}

      </ul>)
        }}
  </CartContext.Consumer>
  </>)
}
}



export default MyCart