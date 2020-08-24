import React, {  Component } from "react";

import fb from '../../assets/img/account/fb.png';
import google from '../../assets/img/account/google.png';
import twitter from '../../assets/img/account/twiitter.png';
import lin from '../../assets/img/account/linkedin.png';

import "./login.css";

import {  Link } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";

export default class LoginSM extends Component {
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
            console.log(this.state);

            let input = {};

            input["email"] = "";
            input["password"] = "";

            this.setState({ input: input });

            alert('Welcome');
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;


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


        if (typeof input["password"] !== "undefined") {
            if (input["password"].length < 8) {
                isValid = false;
                errors["password"] = "Please add at least 8 charachter.";
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
                    <div class="col s12  m5 l5 ">
                        <div className="left">
                            
                            <h5 class="indigo-text">Please, login into your account</h5>

                                <div class="z-depth-1 grey lighten-4 row formGroup">

                                    <form class="col s12" method="post" onSubmit={this.handleSubmit}>

                                        <div class='row'>
                                            <div class='input-field col s12'>
                                                <i class="material-icons prefix">mail_outline</i>
                                                <input class='validate' type='email' name='email' id='email' class="form-control" value={this.state.input.email}
                                                    onChange={this.handleChange} /><div className="red-text">{this.state.errors.email}</div>
                                                <label for='email'>Enter your email</label>
                                            </div>
                                        </div>

                                        <div class='row'>
                                            <div class='input-field col s12'>
                                                <i class="material-icons prefix">lock_outline</i>
                                                <input class='validate' type='password' name='password' id='password' class="form-control" value={this.state.input.password}
                                                    onChange={this.handleChange} /><div className="red-text">{this.state.errors.password}</div>
                                                <label for='password'>Enter your password</label>
                                            </div>




                                        </div>
                                        <label className='float: right;'>
                                            <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
                                        </label>
                                        <p>
                                            <label>
                                                <input type="checkbox" />
                                                <span class="left">Remember me</span>
                                            </label>
                                        </p>
                                        <br />

                                        <div class='row'>
                                            <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
                                        </div>

                                        <p class="indigo-text">Not yet registered!</p>
                                        <h6><Link to="/signup">Create new Account</Link></h6>

                                    </form>
                                </div>
                            
                        </div>
                    </div>

                    <div class="col s12  m2 l2 ">
                    <div class="section"></div>
                    <div class="section"></div>
                    <div class="section"></div>
                    <div class="section"></div>
                        <div class="row">
                        <h5>or</h5>
                    </div>
                    </div>
                   
                    <div class="col s12  m5 l5 ">
                    <div className="right">
                        <h5 class="indigo-text">Login with Social Media</h5>

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
               
                    </div>
                </div>
            </div>
            </center>
            </div>
        )

    }



}

