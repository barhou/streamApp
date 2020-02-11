import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"

import './login.css'
import logo from "../image/img_avatar2.png"

class Login extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        uname: "",
        password: ""
    }
    onSubmit = () => {

        if (this.state.uname === "admin" && this.state.password === "admin") {
            this.props.history.push('/home')
        } else {
            alert("no match")
        }

        this.setState({ uname: "", password: "" })
    }
    handleChange = (hmed) => {
        this.setState({ [hmed.target.name]: hmed.target.value })
    }
    render() {
        return (
            <div className="bigContainer">
                <h2>Login Form</h2>
                <div className="imgcontainer">
                    <img src={logo} alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input onChange={aymen => this.handleChange(aymen)} type="text" value={this.state.name} placeholder="Enter Username" name="uname" required />
                    <label for="password"><b>Password</b></label>
                    <input onChange={aymen => this.handleChange(aymen)} type="password" value={this.state.password} placeholder="Enter Password" name="password" required />
                    <button onClick={this.onSubmit} type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)