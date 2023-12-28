import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './products.css'
import Header from './header';
import Footer from './footer';
import productsList from './data.json'
import ProductCard from './productcard';



const Products = () =>{
        return(
          <>
            <Header />

              <div className = "products-bg-container">
                <div className = "products-page-top-container">
                    <h1>DB</h1>
                    <div className = "products-page-input-container">
                    <input type = "search" placeholder = "Search" className = "products-page-input-element"/>
                    <input type = "submit" className = "products-page-input-submit"/>
                    </div>
                  </div>
                  <ul className = "products-list-container">
                      {productsList.map((eachItem)=>(
                        <ProductCard productsList = {eachItem} key = {eachItem.id}/>
                         ))}
                  </ul>
              </div>
            
            <Footer />
          </>
      )

    }

export default Products