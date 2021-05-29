import React from 'react';
import { validateEmail, validateName, validateInput } from "../validators.js";

export default class Form extends React.Component {
    state = {
        isValid: {
            email: false, 
            name: false,
            dateOfBirth: false,
            message: false
        },
    }
    inputEmailRef = React.createRef();
    inputNameRef = React.createRef();
    inputDateRef = React.createRef();
    setEmailInputValue = () => {
        this.setState({email: this.inputEmailRef.current.value})
    };
    validateInputValue = (inputField, validatorFunction, isInputValid) => {
        if (inputField) {
            if (!validatorFunction(inputField.value)) {
                this.setState({
                    isValid: {...this.state.isValid, [isInputValid]: false}
                })
            } else {
                this.setState({
                    isValid: {...this.state.isValid, [isInputValid]: true}
                })
            }
        }
    };
    isEnableButton = () => {
        return this.state.isValid.email && this.state.isValid.dateOfBirth && this.state.isValid.name && this.state.isValid.message
    }
    handleSubmit = (e) => {
        this.isEnableButton ? alert("Form is submitted") : alert("Form is not submitted")
        e.preventDefault();
    }
    render() {
        return (
            <div className="form-container container-wrapper">
                <div className="left-side">
                    <h2 className="header-title">Request info</h2>
                    <p>Got a question? Need to see a demo? Want to start your free trial subscription? We'd love to hear from you! Contact us and we will get back to you shortly.</p>
                    <img src="./images/ContactUs.svg" alt=""/>
                </div>
                <div className="right-side">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            onChange={ (e) => { this.validateInputValue(e.target, validateName, "name" )}}
                            type="text" 
                            ref={this.inputNameRef}
                            placeholder="Name*" 
                            required 
                            aria-required="true" />
                        <input 
                            onChange={ (e) => {this.validateInputValue(e.target, validateEmail, "email")}}
                            type="email" 
                            ref={this.inputEmailRef} 
                            placeholder="Email*" 
                            required 
                            aria-required="true" />
                        <input 
                            onChange={ (e) => {this.validateInputValue(e.target, validateInput, "dateOfBirth")}}
                            type="date" 
                            ref={this.inputDateRef}
                            min="1900-04-01" 
                            max="2003-05-30" 
                            data-placeholder="Date of birth*" 
                            required 
                            aria-required="true" />
                        <textarea 
                            onChange={ (e) => {this.validateInputValue(e.target, validateInput, "message")}}
                            rows="1" 
                            maxLength="200" 
                            placeholder="Message*"
                            required >    
                        </textarea>
                        <button disabled={!this.isEnableButton} className="article-btn">Request info</button>
                    </form>
                </div>
            </div>
        )
    }
}