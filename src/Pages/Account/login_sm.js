import React, {  Component } from "react";

import fb from '../../assets/img/account/fb.png';
import google from '../../assets/img/account/google.png';
import twitter from '../../assets/img/account/twiitter.png';
import lin from '../../assets/img/account/linkedin.png';

import "./login_sm.css";

import {  Link } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import GoogleLogin from "../../PageBlocks/GoogleAccount/LogIn/LogIn";
import { connect } from 'react-redux';
import { login } from '../../Globals/ReduxStores/UserSlice';

import { SIGNUP } from '../../Globals/PathConstants';
import { getClientIp, GRAPHQL_URL, LOCAL_STORAGE_NAMES, SIGN_IN_METHOD, getRequestToken } from "../../Globals/Config";
import { SIGN_IN_MUTATION } from "../../Globals/Graphql/MutationTemplates/Account";

class LoginSM extends Component {
    constructor() {
        super();
        this.state = {
            input: {
                email: '', password: '',
            },
            errors: {
                email: '', password: '',
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

    async handleSubmit (event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            const signInMutationVariables = {
                username: this.state.input["email"],
                password: this.state.input["password"],
                client_ip: await getClientIp(),
                request_token: getRequestToken(),
            }

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
                if (response.data.SignInAction['message'] === "SUCCESS") {
                    let token = response.data.SignInAction['token'];
                    let first_name = response.data.SignInAction['first_name'];
                    let last_name = response.data.SignInAction['last_name'];
                    let email_id = response.data.SignInAction['email_id'];
                    localStorage.setItem(LOCAL_STORAGE_NAMES.PREVIOUS_SIGN_IN_METHOD, SIGN_IN_METHOD.NATIVE);
                    localStorage.setItem(LOCAL_STORAGE_NAMES.PREVIOUSLY_SIGNED_IN, true);
                    this.props.login ({
                        first_name: first_name,
                        last_name: last_name,
                        email_id: email_id,
                        authorization_token: token,
                    });
                    alert('Logged in');
                }
                else {
                    console.log("Log in ", signInMutationVariables);
                    throw(response.data.SignUpAction['message']);
                    
                }
            })
            .then(() => {

                //clean up after sign in
                let input = {};

                input["email"] = "";
                input["password"] = "";
    
                this.setState({ input: input });
            })
            .catch( err => { alert('Account creation failed'); console.log(err); });

            // alert('Welcome');
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
                errors["password"] = "Please enter the valid password";
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
                        <div className="col s12">
                            {/* <div className="left"> */} 
                            <div className="col l3"></div>
                            <div className="z-depth-1 lighten-4 col s12 m12 l6 formGroup" >
                                <div className="signin-form-container">
                                    <form className="col s12 signin-form" method="post" onSubmit={this.handleSubmit}>
                                        <h5 className="indigo-text">Login</h5>
                                        <div className='input-field col s12'>
                                            <i className="material-icons prefix">mail_outline</i>
                                            <input className='validate' type='email' name='email' id='email' className="form-control" value={this.state.input.email}
                                                onChange={this.handleChange} />
                                            <div className="red-text">{this.state.errors.email}</div>
                                            <label htmlFor='email'>Enter your email or phone</label>
                                        </div>

                                        <div className='input-field col s12'>
                                            <i className="material-icons prefix">lock_outline</i>
                                            <input className='validate' type='password' name='password' id='password' className="form-control" value={this.state.input.password}
                                                onChange={this.handleChange} />
                                            <div className="red-text">{this.state.errors.password}</div>
                                            <label htmlFor='password'>Enter your password</label>
                                        </div>

                                        <p className="left-align signin-remember-me">
                                            <label>
                                                <input type="checkbox"/>
                                                <span>Remember me</span>
                                            </label>
                                        </p>

                                        <p>
                                            <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                                        </p>

                                        <div className='row'>
                                            <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect waves-light teal lighten-2'>Login</button>
                                        </div>

                                        <p className="indigo-text">Not registered yet?<br/><Link to={SIGNUP}>Create new Account</Link></p>
                                    </form>
                                    <GoogleLogin button_color_class="white" other_classes="black-text" title='Sign In With Google'/>
                                </div>
                                
                            </div>
                            {/* </div> */}
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
                        
                        {/* <div class="col s12  m5 l5 ">
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
                        </div> */}
                    </div>
                </center>
            </div>
        )

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
)(LoginSM);