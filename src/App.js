import React from "react"
import {Component} from 'react'
import {BrowserRouter,Switch,Route,} from 'react-router-dom'
import CartContext from "./Context/cartContext"

import FirstPage from "./Components/firstpage"
import FifthPage from './Components/fifthpage'
import Products from './Components/products'
import MyCart from "./Components/mycart"
import ProductCardView from "./Components/productcardview"
import LoginForm from "./Components/loginform"
import RegisterForm from "./Components/registerform"



class App extends Component{
      state = {cartList : []}

      addCartItem = (product)=>{
         const {cartList} = this.state
         const productObject = cartList.find(each => each.id === product.id)
         if(productObject){
            this.setState(prevState =>({
               cartList: prevState.cartList.map(eachItem => {
                  if(productObject.id === eachItem.id){
                     const updateQuantity  = eachItem.quantity + product.quantity
                     return {...eachItem, quantity: updateQuantity}
                  }
                  return eachItem
               })
            }))
         }else{
            this.setState(prevState =>({cartList : [...prevState.cartList, product]}))
         }
      }
      
      deleteCartItem = (id) =>{
         const {cartList} = this.state
         const exceptDeleteItemList = cartList.filter(eachItem => eachItem.id !== id)
         this.setState({cartList:exceptDeleteItemList})
      }

      removeAllCartItems = () =>{
         this.setState({cartList : []})
      }

      updateIncrementQuantity = (id) =>{
         this.setState(prevState =>({
            cartList: prevState.cartList.map(eachItem => {
               if(id === eachItem.id){
                  const updateQuantity  = eachItem.quantity + 1
                  return {...eachItem, quantity: updateQuantity}
               }
               return eachItem
            })
         }))
      }

      updateDecrementQuantity = (id) =>{
         const {cartList} = this.state
         const productObject = cartList.find(each =>(each.id === id))
         if(productObject.quantity > 1){
            this.setState(prevState =>({
               cartList: prevState.cartList.map(eachItem => {
                  if(id === eachItem.id){
                     const updateQuantity  = eachItem.quantity - 1
                     return {...eachItem, quantity: updateQuantity}
                  }
                  return eachItem
               })
            }))
         }
      }

   render(){
      const {cartList} = this.state
   return ( 
         <BrowserRouter>
            <CartContext.Provider
            value = {{
               cartList,
               addCartItem : this.addCartItem, 
               deleteCartItem: this.deleteCartItem,
               removeAllCartItems: this.removeAllCartItems,
               updateIncrementQuantity : this.updateIncrementQuantity,
               updateDecrementQuantity: this.updateDecrementQuantity
               }}>
                  
               <Switch>
                  <Route exact path = "/login" component = {LoginForm} />
                  <Route exact path = "/login" component = {LoginForm}/>
                  <Route exact path = "/register" component = {RegisterForm}/>  
                  <Route exact path = "/" component = {FirstPage}/>
                  <Route exact path = "/shopnow" component = {Products} />
                  <Route exact path = "/products" component = {Products}/>
                  <Route exact path = "/customize" component = {FifthPage}/>
                  <Route exact path = "/products/:id" component = {ProductCardView}/>
                  <Route exact path = "/cart" component = {MyCart} />
               </Switch>
            </CartContext.Provider>
         </BrowserRouter>
      )
   }

}

export default App