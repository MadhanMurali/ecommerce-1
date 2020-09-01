import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import M from 'materialize-css';
import './checkout.css';

export default class Shipping extends Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
        
    }
    componentDidMount(){
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelectorAll('select');
        //     var instances = M.FormSelect.init(elems, options);
        //   });
        console.log(M);
        M.AutoInit();

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
            input["full_name"] = "";
            input["telephone"] = "";
            input["house"] = "";
            input["area"] = "";
            input["landmark"] = "";
            input["city"] = "";
            input["ztate"] = "";
            input["pincode"] = "";
            input["country"] = "";
            this.setState({ input: input });

            alert('Redirecting to Payment page...');
        }
    }

    validate(){
        let input = this.state.input;
        let errors = {};
    
        let isValid = true;
     
        if (!input["full_name"]) {
          isValid = false;
          errors["full_name"] = "Please enter your Name.";
        }
    
        if (typeof input["full_name"] !== "undefined") {
          const re = /^\S*$/;
          if(input["full_name"].length < 1 || !re.test(input["full_name"])){
              isValid = false;
              errors["full_name"] = "Please enter valid Name.";
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
                 errors["telephone"] = "Please enter 10 digit mobile number.";
             }
          }

          if (!input["house"]) {
            isValid = false;
            errors["house"] = "Please enter your House no., Building name...";
          }
      
          if (typeof input["house"] !== "undefined") {
            const re = /^\S*$/;
            if(input["house"].length < 1 || !re.test(input["house"])){
                isValid = false;
                errors["house"] = "Please enter valid details.";
            }
          }

          if (!input["area"]) {
            isValid = false;
            errors["area"] = "Please enter your area";
          }
      
          if (typeof input["area"] !== "undefined") {
            const re = /^\S*$/;
            if(input["area"].length < 1 || !re.test(input["area"])){
                isValid = false;
                errors["area"] = "Please enter valid details.";
            }
          }

          if (!input["landmark"]) {
            isValid = false;
            errors["landmark"] = "Please enter any landmark";
          }
      
          if (typeof input["landmark"] !== "undefined") {
            const re = /^\S*$/;
            if(input["landmark"].length < 1 || !re.test(input["landmark"])){
                isValid = false;
                errors["landmark"] = "Please enter valid details.";
            }
          }

          if (!input["city"]) {
            isValid = false;
            errors["city"] = "Please enter your city";
          }
      
          if (typeof input["city"] !== "undefined") {
            const re = /^\S*$/;
            if(input["city"].length < 1 || !re.test(input["city"])){
                isValid = false;
                errors["city"] = "Please enter valid details.";
            }
          }
        
            if (!input["pincode"]) {
                isValid = false;
                errors["pincode"] = "Please enter pincode.";
              }
            if (typeof input["pincode"] !== "undefined") {
                 var pattern = new RegExp(/^[0-9\b]+$/);
                 if (!pattern.test(input["pincode"])) {
                    isValid = false;
                    errors["pincode"] = "Please enter only number.";
                 }
                 if(input["pincode"].length != 6){
                    isValid = false;
                     errors["pincode"] = "Please enter 6 digit pincode.";
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
               
                

                <div class="row">
                    <div class="col s12  m12 l12 ">
                        
                         
                            <h5 class="indigo-text">    Enter a new delivery address   </h5>
                            <p>All fields are mandatory</p>
                            
                                <div class="z-depth-3 grey lighten-4 row formGroup" >

                                    <form class="col s12" method="post"  onSubmit={this.handleSubmit}>
                                        
                                        <div class="row">
                                            <div class="input-field col s12">
                                            <i class="material-icons prefix">place</i>
                                                <select>
                                                    <option value="" disabled selected>Choose your country</option>
                                                        <option value="1">Option 1</option>
                                                        <option value="2">Option 2</option>
                                                        <option value="3">Option 3</option>
                                                    
                                                </select>
                                                 <label>Country</label>
                                             
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="input-field col s12">
                                                
                                                <i class="material-icons prefix iconColor">account_circle</i>
                                                <input id='full_name' type='text' name='full_name' class='validate'  value={this.state.input.full_name}
                                                    onChange={this.handleChange} /><div className='red-text'>{this.state.errors.full_name}</div>
                                                <label for="full_name">Full Name</label>
                                            </div>
                                        </div>

                                        <div class="row">
                                                <div class="input-field col s12">
                                                    <i class="material-icons prefix">phone</i>
                                                    <input id='telephone' name='telephone' type='tel' class='validate ' value={this.state.input.telephone}
                                                    onChange={this.handleChange} /><div className='red-text'>{this.state.errors.telephone}</div>
                                                    <label for='telephone'>Mobile No.</label>
                                                </div>
                                            </div>

                                            <div class="row">
                                            <div class="input-field col s12">
                                                <i class="material-icons prefix">home</i>
                                                <input id='house' type='text' name='house' class='validate ' value={this.state.input.house}
                                                    onChange={this.handleChange} /><div className='red-text'>{this.state.errors.house}</div>
                                                <label for='house'>Flat, House No., Building, Comapny, Apartment</label>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="input-field col s12">
                                                <i class="material-icons prefix">house</i>
                                                <input id='area' type='text' name='area' class='validate ' value={this.state.input.area}
                                                    onChange={this.handleChange} /><div className='red-text'>{this.state.errors.area}</div>
                                                <label for='area'>Area, Colony, Street, Sector, Village</label>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="input-field col s12">
                                                <i class="material-icons prefix">business</i>
                                                <input id='landmark' type='text' name='landmark' class='validate ' value={this.state.input.landmark}
                                                    onChange={this.handleChange} /><div className='red-text'>{this.state.errors.landmark}</div>
                                                <label for='landmark'>Landmark(Eg. Near hospital, school etc..)</label>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="input-field col s12">
                                                <i class="material-icons prefix">location_city</i>
                                                <input id='city' type='text' name='city' class='validate ' value={this.state.input.city}
                                                    onChange={this.handleChange} /><div className='red-text'>{this.state.errors.city}</div>
                                                <label for='city'>Town/City</label>
                                            </div>
                                        </div>

                                        {/* <div class="row">
                                            <div class="input-field col s12">
                                                <i class="material-icons prefix">place</i>
                                                <input id='ztate' type='text' name='state' class='validate ' value={this.state.input.ztate}
                                                    onChange={this.handleChange} /><div className='red-text'>{this.state.errors.ztate}</div>
                                                <label for='ztate'>State</label>
                                            </div>
                                        </div> */}

                                        <div class="row">
                                            <div class="input-field col s12">
                                            <i class="material-icons prefix">place</i>
                                                <select>
                                                    <option value="" disabled selected>Choose your State</option>
                                                        <option value="1">Option 1</option>
                                                        <option value="2">Option 2</option>
                                                        <option value="3">Option 3</option>
                                                    
                                                </select>
                                                 <label>State</label>
                                             
                                            </div>
                                        </div>

                                            <div class="row">
                                            <div class="input-field col s12">
                                                <i class="material-icons prefix">place</i>
                                                <input id='pincode' type='text' name='pincode' class='validate ' value={this.state.input.pincode}
                                                    onChange={this.handleChange} /><div className='red-text'>{this.state.errors.pincode}</div>
                                                <label for='pincode'>PinCode</label>
                                            </div>
                                        </div>

                                        <div class="row center-align">
                                            <button type='submit' name='btn_login' class=' btn btn-large waves-effect indigo center-align'>Continue with Payment</button>
                                        </div>

                                        

                                    </form>
                                </div>
                            </div>
                            
                        
                    </div>


                       
                            
                
          
            
            </div>
              )

    }



}