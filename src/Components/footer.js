import {Component} from 'react'
import './footer.css'

class Footer extends Component{
    render(){
        return(
            <>
                <nav className = "footer-container">
                    <h1 className = "brand-name">DarjiBhai</h1>
                    <p className = "copy-right">Copyright 2023. www.darjibhai.com / Contact us / Privacy Policy</p>
                </nav>
            </>
        )
    }
}

export default Footer