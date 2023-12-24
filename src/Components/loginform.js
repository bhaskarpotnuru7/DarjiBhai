import React,{Component} from 'react'

import './loginform.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
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
        />
      </>
    )
  }

  onSubmitSuccess = () =>{
    const {history} = this.props
    history.replace("/")
  }

  onSubmitFailure = errorMsg =>{
        console.log(errorMsg)
  }

  onSubmitForm = async event =>{
      event.preventDefault()
      const {username,password} = this.state
      const userDetails = {username,password}
      const url = "https://apis.ccbp.in/login"
      const options = {
            method : "POST",
            body : JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
      if(response.ok === true){
            this.onSubmitSuccess()
      }else{
         this.onSubmitFailure(data.error_msg)
      }
  }

  render() {
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
        </form>
      </div>
    )
  }
}

export default LoginForm
