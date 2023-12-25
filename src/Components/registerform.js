import React,{Component} from "react";
import { Link } from "react-router-dom";
import './registerform.css'

class RegisterForm extends Component{
    render(){
        return(
        <div className = "register-form-container">
            <form className = "form-container">
                <h1 className = "form-heading">Register Here</h1>
            <div className = "register-container">
                <div className = "input-container">
                <label className="input-label" htmlFor="firstname">
                    FULL NAME
                    </label>
                    <input type="text" id="firstname" className="firstname-input-filed" value = "" />
                </div>

                <div className = "input-container">
                <label className="input-label" htmlFor="firstname">
                    PHONE NUMBER
                    </label>
                    <input type="text" id="firstname" className="firstname-input-filed" value = "" />
                </div>

                <div className = "input-container">
                <label className="input-label" htmlFor="firstname">
                    CREATE PASSWORD
                    </label>
                    <input type="text" id="firstname" className="firstname-input-filed" value = "" />
                </div>

                <div className = "input-container">
                <label className="input-label" htmlFor="firstname">
                    RE-ENTER PASSWORD
                    </label>
                    <input type="text" id="firstname" className="firstname-input-filed" value = "" />
                </div>
                <button type="submit" className="register-button">
                    REGISTER
                </button>
                <p className = "already-have-account">Already have an account? <Link to = "/login" className = "login-now-link">Login now</Link></p> 
            </div>
            </form>
        </div>
        )
    }
}

export default RegisterForm