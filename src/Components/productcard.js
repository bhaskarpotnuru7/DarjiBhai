import React from 'react'
import { Link } from 'react-router-dom'
import './productcard.css'
import CartContext from '../Context/cartContext'

const ProductCard = props =>(

    <CartContext.Consumer>
        {value =>{
            const {addCartItem} = value
            let quantity = 1
            const {productsList} = props
            const {id,imageUrl,name,price,description} = productsList

            const onAddCartItem = () =>{
                addCartItem({...productsList,quantity})
            }

            return(
        
                <li className="product-card-container">
                    <Link to = {`/products/${id}`} key = {id} className = "link-item">
                <img src={imageUrl} alt={name} />
                <h2>{name.substring(0, 32)}...</h2>
                <p className="product-card-price">Rs.{price}/-</p>
                <p className="product-card-desc">{description.substring(0, 100)}...</p>
                </Link>
                <button className='bg-info' onClick = {onAddCartItem}>Add to Cart</button>
            </li>
            
        )

        }}
    </CartContext.Consumer>

)

export default ProductCard