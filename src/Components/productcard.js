import React from 'react'
import './productcard.css'



const ProductCard = props => {
                const {productsList} = props
                const {imageUrl,name,price,description} = productsList
                return(
                <li className="product-card-container">
                    <img src={imageUrl} alt={name} />
                    <h2>{name}</h2>
                    <p className="product-card-price">Rs.{price}/-</p>
                    <p className="product-card-desc">{description.substring(0, 100)}...</p>
                    <button className='bg-info' >Add to Cart</button>
                </li>
            )
    }

export default ProductCard
