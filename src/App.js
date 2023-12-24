import React from "react"
import {Component} from 'react'
import {BrowserRouter,Switch,Route,} from 'react-router-dom'
import CartContext from "./Context/cartContext"

import FirstPage from "./Components/firstpage"
import FifthPage from './Components/fifthpage'
import Products from './Components/products'
import Header from './Components/header'
import Footer from './Components/footer'
import MyCart from "./Components/mycart"
import ProductCardView from "./Components/productcardview"
import LoginForm from "./Components/loginform"



class App extends Component{
      state = {cartList : [],}

      addCartItem = product =>{
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
                  <Route exact path = "/login" component = {LoginForm} />
            <Header />  
               <Switch>
                  
                  <Route exact path = "/" component = {FirstPage}/>
                  <Route exact path = "/shopnow" component = {Products} />
                  <Route exact path = "/products" component = {Products}/>
                  <Route exact path = "/customize" component = {FifthPage}/>
                  <Route exact path = "/products/:id" component = {ProductCardView}/>
                  <Route exact path = "/cart" component = {MyCart} />
               </Switch>
                  <Footer /> 
            </CartContext.Provider>
         </BrowserRouter>
      )
   }

}

export default App