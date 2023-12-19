import React from "react"
import {Component} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import FirstPage from "./Components/firstpage"
import ThirdPage from './Components/thirdpage'
import FifthPage from './Components/fifthpage'
import Products from './Components/products'
import Header from './Components/header'
import Footer from './Components/footer'
import MyCart from "./Components/mycart"


class App extends Component{
   render(){
   return ( 
      
         <BrowserRouter>
                 <Header /> 
               <Switch>
               
                  <Route exact path = "/" component = {FirstPage}/>
                  
                  <Route exact path = "/products" component = {Products}/>
                  <Route exact path = "/shop" component = {ThirdPage}/>
                  <Route exact path = "/customize" component = {FifthPage}/>
                  <Route exact path = "/cart" component = {MyCart} />
               </Switch>
               <Footer /> 
         </BrowserRouter>
      )
   }

}

export default App
  


