import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './products.css'
import Header from './header';
import Footer from './footer';
import productsList from './data.json'



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

                         <Link to = {`/products/${eachItem.id}`} key = {eachItem.id} className = "link-item">
                          <li className="product-card-container">
                          <img src={eachItem.imageUrl} alt={eachItem.name} />
                          <h2>{eachItem.name}</h2>
                          <p className="product-card-price">Rs.{eachItem.price}/-</p>
                          <p className="product-card-desc">{eachItem.description.substring(0, 100)}...</p>
                          <button className='bg-info' >Add to Cart</button>
                      </li>
                      </Link>
                ))}
                  </ul>
              </div>
            
            <Footer />
          </>
      )

    }

export default Products