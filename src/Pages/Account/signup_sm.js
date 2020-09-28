import React, { Component } from "react";

import fb from '../../assets/img/account/fb.png';
import google from '../../assets/img/account/google.png';
import twitter from '../../assets/img/account/twiitter.png';
import lin from '../../assets/img/account/linkedin.png';

import {  Link } from "react-router-dom";

import { getClientIp, getRequestToken, GRAPHQL_URL } from "../../Globals/Config";
import { connect } from 'react-redux';
import { login } from '../../Globals/ReduxStores/UserSlice';

import "./signup_sm.css";

import "materialize-css/dist/css/materialize.min.css";
import GoogleLogin from "../../PageBlocks/GoogleAccount/LogIn/LogIn";
import { SIGNIN } from "../../Globals/PathConstants";

const SIGN_IN_MUTATION = `mutation SignUpAction($first_name: String, $last_name: String, $email_id: String, $client_ip: String, $request_token: String, $mobile_no1: String) {
    SignUpAction(first_name: $first_name, last_name: $last_name, email_id: $email_id, client_ip: $client_ip, request_token: $request_token, mobile_no1: $mobile_no1) {
        message,
        token,
    }
}`;

class SignupSM extends Component {
    constructor() {
        super();
        this.state = {
            input: {
                first_name: '', last_name: '', telephone: '',
                email: '', password: '', confirm_password: '',
            },
            errors: {
                first_name: '', last_name: '', telephone: '', 
                email: '', password: '', confirm_password: '',
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {

            const signInMutationVariables = { 
                first_name: this.state.input["first_name"],
                last_name: this.state.input["last_name"],
                email_id: this.state.input["email"],
                password: this.state.input["confirm_password"],
                mobile_no: this.state.input["telephone"],
                client_ip: await getClientIp(),
                request_token: getRequestToken(),
            }

            //used to reuse signInMutationVariables with redux store
            const signInMutationVariablesNoPassword = ({ password, ...rest }) => rest;
    
            fetch(GRAPHQL_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: SIGN_IN_MUTATION,
                    variables: signInMutationVariables,
                })
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.data.SignUpAction['message'] === "SUCCESS") {
                    let token = response.data.SignUpAction['token'];
                    this.props.login ({
                        ...signInMutationVariablesNoPassword(signInMutationVariables),
                        authorization_token: token,
                    });
                    alert('Account created');
                }
                else {
                    throw(response.data.SignUpAction['message']);
                }
            })
            .then(() => {

                //clean up after sign in
                let input = {};
                input["first_name"] = "";
                input["last_name"] = "";
                input["telephone"] = "";
                input["email"] = "";
                input["password"] = "";
                input["confirm_password"] = "";
    
                this.setState({ input: input });
            })
            .catch( err => { alert('Account creation failed'); console.log(err); });
        }
    }

    validate(){
        let input = this.state.input;
        let errors = {};
    
        let isValid = true;
     
        if (!input["first_name"]) {
          isValid = false;
          errors["first_name"] = "Please enter your First Name.";
        }
    
        if (typeof input["first_name"] !== "undefined") {
          const re = /^\S*$/;
          if(input["first_name"].length < 1 || !re.test(input["first_name"])){
              isValid = false;
              errors["first_name"] = "Please enter valid First Name.";
          }
        }

        if (!input["last_name"]) {
            isValid = false;
            errors["last_name"] = "Please enter your Last Name.";
          }
      
          if (typeof input["last_name"] !== "undefined") {
            const re = /^\S*$/;
            if(input["last_name"].length < 1 || !re.test(input["last_name"])){
                isValid = false;
                errors["last_name"] = "Please enter valid Last Name.";
            }
          }
          if (!input["telephone"]) {
            isValid = false;
            errors["telephone"] = "Please enter your Mobile number.";
          }
          if (typeof input["telephone"] !== "undefined") {
             var pattern = new RegExp(/^[0-9\b]+$/);
             if (!pattern.test(input["telephone"])) {
                isValid = false;
                errors["telephone"] = "Please enter only number.";
             }
             if(input["telephone"].length != 10){
                isValid = false;
                 errors["telephone"] = "Please enter 10 digit phone number.";
             }
          }
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Please enter your email Address.";
        }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
          }
        }
    
        if (!input["password"]) {
          isValid = false;
          errors["password"] = "Please enter your password.";
        }
    
        if (!input["confirm_password"]) {
          isValid = false;
          errors["confirm_password"] = "Please enter your confirm password.";
        }
    
        if (typeof input["password"] !== "undefined") {
          if(input["password"].length < 8){
              isValid = false;
              errors["password"] = "Please add at least 8 charachter.";
          }
        }
    
        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
            
          if (input["password"] != input["confirm_password"]) {
            isValid = false;
            errors["password"] = "Passwords don't match.";
          }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }
    render() {
        return (
            <div className="container">
                <center>
                <div className="row">
                    <div className="col s12 ">
                        <div className="col l3"></div>
                        <div className="z-depth-1 lighten-4 col s12 m12 l6 formGroup" >
                            <h4 className="indigo-text">Create new account</h4>
                            <p className="red-text">All fields are mandatory</p>
                            <form className="col s12 signup-form" method="post"  onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix iconColor">account_circle</i>
                                        <input id='first_name' type='text' name='first_name' className='validate'  value={this.state.input.first_name}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.first_name}</div>
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input id='last_name' type='text' name='last_name' className='validate ' value={this.state.input.last_name}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.last_name}</div>
                                        <label htmlFor='last_name'>Last Name</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">phone</i>
                                        <input id='telephone' name='telephone' type='tel' className='validate ' value={this.state.input.telephone}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.telephone}</div>
                                        <label htmlFor='telephone'>Mobile</label>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className='input-field col s12'>
                                        <i className="material-icons prefix">email</i>
                                        <input className='validate' type='email' name='email' id='email'  value={this.state.input.email}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.email}</div>
                                        <label htmlFor='email'>Email</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='input-field col s12'>
                                        <i className="material-icons prefix">lock</i>
                                        <input className='validate' type='password' name='password' id='password'  value={this.state.input.password}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.password}</div>
                                        <label htmlFor='password'>Password</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='input-field col s12'>
                                        <i className="material-icons prefix">lock</i>
                                        <input className='validate' type='password' name='confirm_password' id='confirm_password'  value={this.state.input.confirm_password}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.confirm_password}</div>
                                        <label htmlFor='confirm_password'>Confirm Password</label>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect waves-red teal lighten-2'>Create Account</button>
                                </div>

                                <p className="indigo-text">Already have an account? <Link to={SIGNIN}>Sign In</Link></p>
                                <GoogleLogin button_color_class="white" other_classes="black-text" title='Sign In With Google'/>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <div className="col s12  m2 l2 ">
                <div className="section"></div>
                <div className="section"></div>
                <div className="section"></div>
                <div className="section"></div>
                    <div className="row">
                    <h5>or</h5>
                </div>
                </div> */}


                {/* <div className="col s12 m5 l5 ">
                
                    <div className="row">
            
                    <h4 className="indigo-text">Signup with Social Media</h4>
                    </div><div className="section"></div>
                    <div className="section"></div>
                    <div className="row">
                    <a href="#"><img className="responsive-img" src={google}/></a>
                    </div>

                    <div className="section"></div>
                    <div className="row">   
                    <a href="#"><img className="responsive-img" src={fb}/></a>
                        </div>

                        <div className="section"></div>
                    <div className="row">        
                        
                    <a href="#"><img className="responsive-img" src={twitter}/></a>
                        </div>
                        <div className="section"></div>
                    <div className="row">        
                        
                    <a href="#"><img className="responsive-img" src={lin}/></a>
                        </div>
                </div> */}
                </center>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = () => {
    return {
        login
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(SignupSM);