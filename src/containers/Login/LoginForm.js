import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginForm extends Component {
    handleInputChange = e => {
        console.log(e.target.value, 'value')
    }
    handleLogin = e => {
        console.log('Login Success')
    }
    render() {
        return (
            <div>
                <div>LoginForm</div>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    placeholder="Password"
                />
                <button onClick={this.handleLogin}>Login</button>
                <div>
                    <h3>
                        Don't Have an account,{' '}
                        <Link to="/register">SignUp</Link>
                    </h3>
                </div>
            </div>
        )
    }
}
