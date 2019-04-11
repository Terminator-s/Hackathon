import React, { Component } from 'react';
import "./home.css";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <div className="container">
                    <h1>Sign up</h1>

                    <hr></hr>

                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>


                    <hr></hr>
                    <button type="submit" className="registerbtn">Login</button>
                </div>

            </form>
        );
    }
}
export default Login;