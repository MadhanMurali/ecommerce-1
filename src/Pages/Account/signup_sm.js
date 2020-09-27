import React, { Component } from "react";

import fb from '../../assets/img/account/fb.png';
import google from '../../assets/img/account/google.png';
import twitter from '../../assets/img/account/twiitter.png';
import lin from '../../assets/img/account/linkedin.png';

import {  Link } from "react-router-dom";
import "./signup.css";

import "materialize-css/dist/css/materialize.min.css";


export default class SignupSM extends Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
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

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            

            let input = {};
            input["first_name"] = "";
            input["last_name"] = "";
            input["telephone"] = "";
            input["email"] = "";
            input["password"] = "";
            input["confirm_password"] = "";

            this.setState({ input: input });
            
            alert('Account created');
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
            <div class="container">
                <center>
                <div class="row">
                    <div class="col s12 ">
                        <h4 class="indigo-text">    Create new account   </h4>
                        <p>All fields are mandatory</p>
                        <div className="col l3"></div>
                        <div class="z-depth-5 lighten-4 col s12 m12 l6 formGroup" >
                            <form class="col s12" method="post"  onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix iconColor">account_circle</i>
                                        <input id='first_name' type='text' name='first_name' class='validate'  value={this.state.input.first_name}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.first_name}</div>
                                        <label for="first_name">First Name</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">account_circle</i>
                                        <input id='last_name' type='text' name='last_name' class='validate ' value={this.state.input.last_name}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.last_name}</div>
                                        <label for='last_name'>Last Name</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">phone</i>
                                        <input id='telephone' name='telephone' type='tel' class='validate ' value={this.state.input.telephone}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.telephone}</div>
                                        <label for='telephone'>Mobile</label>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class='input-field col s12'>
                                        <i class="material-icons prefix">email</i>
                                        <input class='validate' type='email' name='email' id='email'  value={this.state.input.email}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.email}</div>
                                        <label for='email'>Email</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class='input-field col s12'>
                                        <i class="material-icons prefix">lock</i>
                                        <input class='validate' type='password' name='password' id='password'  value={this.state.input.password}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.password}</div>
                                        <label for='password'>Password</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class='input-field col s12'>
                                        <i class="material-icons prefix">lock</i>
                                        <input class='validate' type='password' name='confirm_password' id='confirm_password'  value={this.state.input.confirm_password}
                                            onChange={this.handleChange} />
                                        <div className='red-text'>{this.state.errors.confirm_password}</div>
                                        <label for='confirm_password'>Confirm Password</label>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect waves-red teal lighten-2'>Create Account</button>
                                </div>

                                <p class="indigo-text">Already have an account?</p>
                                <h6><Link to="/login">Login</Link></h6>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <div class="col s12  m2 l2 ">
                <div class="section"></div>
                <div class="section"></div>
                <div class="section"></div>
                <div class="section"></div>
                    <div class="row">
                    <h5>or</h5>
                </div>
                </div> */}


                {/* <div class="col s12 m5 l5 ">
                
                    <div class="row">
            
                    <h4 class="indigo-text">Signup with Social Media</h4>
                    </div><div class="section"></div>
                    <div class="section"></div>
                    <div class="row">
                    <a href="#"><img class="responsive-img" src={google}/></a>
                    </div>

                    <div class="section"></div>
                    <div class="row">   
                    <a href="#"><img class="responsive-img" src={fb}/></a>
                        </div>

                        <div class="section"></div>
                    <div class="row">        
                        
                    <a href="#"><img class="responsive-img" src={twitter}/></a>
                        </div>
                        <div class="section"></div>
                    <div class="row">        
                        
                    <a href="#"><img class="responsive-img" src={lin}/></a>
                        </div>
                </div> */}
                </center>
            </div>
        );
    }
}

