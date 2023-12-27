import React, {Component} from 'react'
import { Link , withRouter} from 'react-router-dom'
import './header.css'
import Cookies from 'js-cookie'

class Header extends Component{

    onClickLogOut = () =>{
        const {history} = this.props
        Cookies.remove("jwt_token")
        history.replace("/login")
    }

    render(){
        return(
            <nav className = "nav-header fixed-top">
                <h1 className = "nav-logo">DB</h1>
                <ul className = "nav-items-container">
                    <li>
                        <Link to="/" className = "nav-item">Home</Link>
                    </li>
                    <li>
                        <Link to="/products" className = "nav-item">Products</Link>
                    </li>
                    <li>
                        <Link to="/customize" className = "nav-item">Customize</Link>
                    </li>
                    <li>
                        <Link to="/cart" className = "nav-item">Cart</Link>
                    </li>
                    <li>
                        <Link to="/userprofile" className = "nav-item nav-profile-item">U</Link>
                    </li>
                    <button className = "logout-button bg-primary" onClick = {this.onClickLogOut}>Log out</button>
                </ul>
                
            </nav>
        )
    }
}

export default withRouter (Header)