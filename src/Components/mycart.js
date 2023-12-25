import React from 'react'
import CartContext from '../Context/cartContext'
import './mycart.css'
import CartItem from './cartitem'
import Header from './header'
import Footer from './footer'


const MyCart = () => (
  <>
    <Header />
 <CartContext.Consumer>
      {value =>{
          const {cartList} = value
          console.log(cartList)
      return(<ul>
        {cartList.map(eachCartItem =>(
            <CartItem key={eachCartItem.id} cartItemDetails = {eachCartItem}/>
          ))}

      </ul>)
        }}
  </CartContext.Consumer>
  <Footer />
  </>
  )



export default MyCart