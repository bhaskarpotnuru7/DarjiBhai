import React from 'react'
import { Component } from 'react'
import IncAndDec from './incanddec'
import './mycart.css'

const cartList = [
  {
      id : 1,
      name: "PlayStation 5",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      description:
        "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
      price: 499,
      countInStock: 15,
    },
    {
      id : 2,
      name: "Iphone 12",
      imageUrl:
        "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
      description:
        "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 1099,
      countInStock: 10,
    },
]

class MyCart extends Component{

  render(){
    
    return(
      
      <div className = "my-cart-container">
      <h1>My Cart</h1>
      {cartList.map(eachItem =>(

         <div className = "cart-item-container">
          <div className = "cart-item-details-container">
              <img src = {eachItem.imageUrl} className = "cart-item-img" alt = {eachItem.name}/>
              <p>{eachItem.name}</p>
          </div>
      
          <IncAndDec />
          
          <p className = "cart-item-price-container">Rs.{eachItem.price}</p>
          <button className = "cart-item-remove-button">X</button>
          </div>
          
      ))}
  </div>
    )
  }
}


export default MyCart