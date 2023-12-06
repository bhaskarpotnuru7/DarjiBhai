import {Component} from 'react'
import './cart.css'

class Cart extends Component{
    render(){
        return(
            <>
    <div className ="cart-bg-container">
        <h1 className = "cart-page-logo">DB | <span className = "your-shopping-cart">Your Shopping Cart</span></h1>

    <div className = "cart-page-details-container">
        <div className ="cart-container">
            <div className ="cart-card-container">
                <img src="https://res.cloudinary.com/dosckylqx/image/upload/v1701081837/DB_LOGO_m5mlre.png" alt="profile" />
                <p>Custom Muggham<br /><span>SKU: DBC346002</span></p>
                <p className ="cart-mixed">Mixed</p>
                <div className ="cart-page-items">
                    <p className ="cart-items">2</p>
                    <div className ="cart-page-button-container">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
                <p className ="cart-price">13500 INR</p>
            </div>
            <i className ="fa-solid fa-xmark cart-cross-icon"></i>
        </div>

        <div className ="cart-container">
            <div className ="cart-card-container">
                <img src="https://res.cloudinary.com/dosckylqx/image/upload/v1701081837/DB_LOGO_m5mlre.png" alt="profile" />
                <p>Designer frock<br /><span>SKU: DB146002</span></p>
                <p className ="cart-yellow">Yellow</p>
                <div className ="cart-page-items">
                    <p className ="cart-items">2</p>
                    <div className ="cart-page-button-container">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
                <p className ="cart-price">8250 INR</p>
            </div>
            <i className ="fa-solid fa-xmark cart-cross-icon"></i>
        </div>

        <div className ="cart-container">
            <div className ="cart-card-container">
                <img src="https://res.cloudinary.com/dosckylqx/image/upload/v1701081837/DB_LOGO_m5mlre.png" alt="profile" />
                <p>Cancron cloth<br /><span>SKU: DB342302</span></p>
                <p className ="cart-cream">Cream</p>
                <div className ="cart-page-items">
                    <p className ="cart-items">2</p>
                    <div className ="cart-page-button-container">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
                <p className ="cart-price">800 INR</p>
            </div>
            <i className ="fa-solid fa-xmark cart-cross-icon"></i>
        </div>
        <div className = "cart-page-bottom-container">
        <div className = "cart-page-back-to-shop">
        <i className="fa-solid fa-arrow-left-long"></i>
        <p>Back to shop</p>
        </div>
        <p >Sub total: <span className = "cart-page-total">22500 INR</span></p>
        </div>
        </div>

    </div>
            </>
        )
    }
}

export default Cart