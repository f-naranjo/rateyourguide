import React, { Component } from 'react'
import AuthService from '../../services/AuthService';
import AuthForm from '../../styles/authForms';
import { ReactSVG } from 'react-svg';

export default class LoginGuide extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  state = {
    username: '',
    password: ''
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({...this.state, [name]:value})
  }
  handleLogin = (e) => {
    const { setUser, history } = this.props;
    e.preventDefault()
    this.authService.loginGuide(this.state)
    .then(
      (user) => {
        setUser(user)
        history.push("/guides/adminpanel")
      },
      (error) => {
        console.error(error)
      }
    )
  }

  render() {
    const { username, password } = this.state;
    return (
      
      <AuthForm>
      <ReactSVG src="./dingologo.svg"></ReactSVG>
      <h2>¡Hola!</h2>
        <form onSubmit={this.handleLogin}>
          <label htmlFor="username">Usuario: </label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
          <label htmlFor="password" >Contraseña </label>
          <input type="password" name="password" value={password} onChange={this.handleChange}/>
          <input type="submit" value="Login"/>
        </form>
      </AuthForm>
    )
  }
}
