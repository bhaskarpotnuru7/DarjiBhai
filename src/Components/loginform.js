import React,{Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import './loginform.css'

const userData = JSON.parse(localStorage.getItem("data"))


class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError : false,
    errorMsg : ""
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
          placeholder = "Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
          placeholder = "Username"
        />
      </>
    )
  }

  onSubmitSuccess = (jwt_token) =>{
    Cookies.set("jwt_token",jwt_token,{expires : 30})
    const {history} = this.props
    history.replace("/")
  }

  onSubmitFailure = () =>{
    const errorMsg = "Username and Password didn,t match"
    this.setState({showSubmitError:true, errorMsg})
  }

  onSubmitForm = async event =>{
    event.preventDefault()
    console.log(userData)
    const {username,password} = this.state
    const user = userData.map(eachUser =>(eachUser.username === username && eachUser.password === password))
    if(user.find(eachValue=>eachValue === true)){
      const jwt_token = "a1234567"
      this.onSubmitSuccess(jwt_token)
    }else{
        this.onSubmitFailure()
    }  
    
  }

  render() {
    const {showSubmitError,errorMsg} = this.state

    const jwt = Cookies.get("jwt_token")
        if(jwt !== undefined){
            return <Redirect to = "/" />
        }
        
    return (
      <div className="login-form-container">
        <h1 className="login-website-logo-mobile-image">DARJIBHAI</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        
        <form className="form-container" onSubmit = {this.onSubmitForm}>
            <h1 className="login-website-logo-desktop-image">DARJIBHAI</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className = "error-msg">*{errorMsg}</p>}
          <p className = "dont-have-account">Don't have an account?  <Link to = "/register" className = "register-now-link">Create Account</Link></p> 
        </form>
      </div>
    )
  }
}

export default LoginForm
