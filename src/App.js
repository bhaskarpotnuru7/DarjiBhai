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
         this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
      }
      
      deleteCartItem = () =>{}
      
   render(){
      const {cartList} = this.state
   return ( 
         <BrowserRouter>
            <CartContext.Provider
            value = {{
               cartList,
               addCartItem : this.addCartItem, 
               deleteCartItem: this.deleteCartItem
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