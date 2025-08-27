import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false
        }

        this.firstNamechangeHandler = this.firstNamechangeHandler.bind(this)
        this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this)
    }

    firstNamechangeHandler (event){
        console.log(event.target.value);
        
        this.setState(
            {firstNameData: event.target.value}
        )   
    }

    lastNameChangeHandler (event){
        this.setState(
            {lastNameData: event.target.value}
        )
    }

    emailChangeHandler (event){
        this.setState(
            {emailData: event.target.value}
        )
    }


    render() {
        return (
            <div className="form-container">
                <form className="register-form" autoComplete="off">
                    {/* Uncomment the next line to show the success message */}
                    {/* <div className="success-message">Success! Thank you for registering</div> */}
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={this.firstNamechangeHandler}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {/* <span id="first-name-error">Please enter a first name</span> */}
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={this.lastNameChangeHandler}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {/* <span id="last-name-error">Please enter a last name</span> */}
                    <input
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={(event) => this.emailChangeHandler(event)}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {/* <span id="email-error">Please enter an email address</span> */}
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}
