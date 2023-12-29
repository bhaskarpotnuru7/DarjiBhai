import React,{ useState } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../Context/cartContext'
import Header from './header'
import Footer from './footer'
import productsList from './data.json'
import './productcardview.css'


const ProductCardView = () =>{

const [quantity,setQuantity] = useState(1)

const onDecBtn = () =>{
    if(quantity > 1){
        setQuantity(quantity-1)
    }
}

const {id} = useParams()
const product = productsList.find((each) => (each.id) === parseInt(id))
const {imageUrl,name,price,description} = product

  return(<CartContext.Consumer>
      {value =>{
          const {addCartItem} = value
          const onAddToCart = () =>{
              addCartItem({...product, quantity},id)
          }
          return(
            <>
            <Header />

            <div className="product-details-container">
                <img src={imageUrl} alt="product" className="product-image" />
              <div className="product">
                <h1 className="product-name">{name}</h1>
                <p className="product-price">Rs.{price}/-</p>
                <p className="product-description">{description}</p>
      
                <div className = "inc-dec-container">
                  <p className = "item-quantity-head">Quantity :</p>
                    <button className = "dec-button" onClick = {onDecBtn}>-</button>
                    <p className = "item-quantity">{quantity}</p>
                    <button className = "inc-button" onClick = {() =>setQuantity(quantity+1)}>+</button>
                </div>
    
                <button type="button" className="button add-to-cart-btn" onClick = {onAddToCart}>
                  ADD TO CART
                </button>
              </div>
            </div>

           
            <Footer />
            </>

            )

      }}
  </CartContext.Consumer>)

}


export default ProductCardView