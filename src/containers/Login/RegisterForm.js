import React, { Component } from 'react'
import { changeRegisterDetails } from '../actions/Login'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'

class RegisterForm extends Component {
    handleInputChange = e => {
        console.log(e.target.name, 'value')
        this.props.changeRegisterDetail({ [e.target.name]: e.target.value })
    }
    handleSubmit = async () => {
        console.log(this.props.registerState, 'Login Success')
        await axios
            .post(
                'http://localhost:5002/api/user/register',
                this.props.registerState
            )
            .then(function(response) {
                console.log({ response })
            })
            .catch(function(error) {
                console.log({ error })
            })
    }
    render() {
        const { name, email, password } = this.props.registerState
        return (
            <div>
                <div>Sign Up User</div>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={name}
                    name="name"
                    placeholder="Name"
                />
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={email}
                    name="email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={this.handleInputChange}
                    value={password}
                    name="password"
                    placeholder="Password"
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    registerState: state.LoginReducer,
})

const mapDispatchToProps = dispatch => ({
    changeRegisterDetail: payload => dispatch(changeRegisterDetails(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
