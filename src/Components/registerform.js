import React,{Component} from "react";
import { Link } from "react-router-dom";
import './registerform.css'

const userData = []

class RegisterForm extends Component{
    
    state = {userDetails : {},username: "", email: "", phonenumber: "", password : "",jwtToken:"",
    usernameErrorMsg : "",
    emailErrorMsg : "",
    phonenumberErrorMsg : "",
    passwordErrorMsg : ""
    }

    onChangeUsername = event =>{
        this.setState({username : event.target.value})
    }
    onChangeMail = event =>{
        this.setState({email : event.target.value})
    }
    onChangePhonenumber = event =>{
        this.setState({phonenumber : event.target.value})
    }
    onChangePassword = event =>{
        this.setState({password : event.target.value})
    }

    validateName = event => {
        if(event.target.value === ""){
            this.setState({usernameErrorMsg:"*Required"})
        }else if(event.target.value.length < 3){
            this.setState({usernameErrorMsg:"*Please enter your fullname"})
        }
        else{
            this.setState({usernameErrorMsg:""})
        }
    }
    validateEmail = event => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if(event.target.value.match(pattern)){
        this.setState({emailErrorMsg:""})
        this.setState({email:event.target.value})
        }else if(event.target.value === ""){
            this.setState({emailErrorMsg:"*Required"})
        }
        else{
            this.setState({emailErrorMsg:"*Invalid email"})
        }
        
    }
    validatePhonenumber = event => {
        if(event.target.value === ""){
            this.setState({phonenumberErrorMsg:"*Required"})
        }else if(event.target.value.length !== 10){
            this.setState({phonenumberErrorMsg:"*Invalid Phone number"})
        }
        else{
            this.setState({phonenumberErrorMsg:""})
        }
    }
    validatePassword = event => {
        if(event.target.value === ""){
            this.setState({passwordErrorMsg:"*Required"})
        }else if(event.target.value.length < 8){
            this.setState({passwordErrorMsg:"*Use 8 characters in your password"})
        }
        else{
            this.setState({passwordErrorMsg:""})
        }
    }

    onSubmitRegisterForm = event =>{
        const {userDetails,username,email,phonenumber,password,} = this.state
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        event.preventDefault()
        userDetails.username = username 
        userDetails.email = email
        userDetails.phonenumber = phonenumber
        userDetails.password = password
        userDetails.jwtToken = password
        if(username.length > 2 && email.match(emailPattern) && phonenumber.length === 10 && password.length > 7){
            userData.push(userDetails)
            localStorage.setItem("data",JSON.stringify(userData))
            this.setState({username:""})
            this.setState({email:""})
            this.setState({phonenumber:""})
            this.setState({password:""})
            this.setState({userDetails:{}})
        }
        
    }

    render(){
        const {username,password,email,phonenumber,usernameErrorMsg,emailErrorMsg,phonenumberErrorMsg,passwordErrorMsg} = this.state
        return(
        <div className = "register-form-container">
            <form className = "form-container" onSubmit = {this.onSubmitRegisterForm}>
                <h1 className = "form-heading">Register Here</h1>
            <div className = "register-container">
                <div className = "input-container">
                <label className="input-label" htmlFor="username">
                    FULL NAME
                    </label>
                    <input type="text" id="username" className="input-filed" value = {username || ""} onChange = {this.onChangeUsername} onBlur={this.validateName} placeholder = "Username"/>
                    <p className = "validation-details">{usernameErrorMsg}</p>
                </div>

                <div className = "input-container">
                <label className="input-label" htmlFor="mail">
                    EMAIL
                    </label>
                    <input type="text" id="mail" className="input-filed" value = {email || ""} onChange = {this.onChangeMail} onBlur={this.validateEmail} placeholder = "Email"/>
                    <p className = "validation-details">{emailErrorMsg}</p>
                </div>

                <div className = "input-container">
                <label className="input-label" htmlFor="phonenumber">
                    PHONE NUMBER
                    </label>
                    <input type="tel" id="phonenumber" className="input-filed" value = {phonenumber || ""} onChange = {this.onChangePhonenumber} onBlur={this.validatePhonenumber} placeholder = "Phone number"/>
                    <p className = "validation-details">{phonenumberErrorMsg}</p>
                </div>

                <div className = "input-container">
                <label className="input-label" htmlFor="password">
                    CREATE PASSWORD
                    </label>
                    <input type="text" id="password" className="input-filed" value = {password || ""} onChange = {this.onChangePassword} onBlur={this.validatePassword} placeholder = "password"/>
                    <p className = "validation-details">{passwordErrorMsg}</p>
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