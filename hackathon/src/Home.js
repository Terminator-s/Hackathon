import React, { Component } from 'react';
import "./home.css";
class FlavorForm extends React.Component {
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
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>

                            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                <hr></hr>
                                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                                    <button type="submit" className="registerbtn">Register</button>
            </div>

        <div className="container signin">
            <p>Already have an account? <a href="<Login/>">Sign in</a>.</p>
        </div>
 </form>
        );
    }
}
export default FlavorForm;