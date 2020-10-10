import React, { useEffect } from 'react';

import './ContactUs.css';
import M from 'materialize-css';

import Logo from '../../assets/img/contact-us/contact-us-logo-black.png';

const ContactUs = () => {

    useEffect (() => {
        let textareaAddressElem = document.getElementById("query-text-area");
        M.CharacterCounter.init(textareaAddressElem);
    });

    return (
        <div>   
            <div className="row valign-wrapper center-align">
                <div className="col s12 m6 l6">
                    <div className="card-panel">
                        <h5>Mail Us</h5>
                        <form>
                            <div className="input-field">
                                <input id="query-name" type="text" className="validate"/>
                                <label htmlFor="query-name">Your Good Name</label>
                            </div>
                            <div className="input-field">
                                <input id="query-email" type="email" className="validate"/>
                                <label htmlFor="query-email">Your Email</label>
                            </div>
                            <div className="input-field">
                                <textarea id="query-text-area" className="materialize-textarea" data-length="500"></textarea>
                                <label htmlFor="query-text-area">Your Query</label>
                            </div>
                            <button className="btn waves-effect waves-light teal darken-3">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col s12 m6 ">
                    <div className="card-panel z-depth-2">
                        <div className="row valign-wrapper">
                            <div className="col s12 m12 l6">
                                <img id={"contact-us-logo"} src={Logo} alt="logo-black" />
                            </div>
                            <div className="col s12 m12 l6">
                                <div className="" id="contact-us-address-card">
                                    <p>62, Station Rd, Radha Nagar, <br/>Chromepet, Chennai, <br/>Tamil Nadu - 600044</p>
                                    <p>Tel: <a className="red-text accent-3" href="tel:+91 90 3456 7890"><strong>+91 90 3456 7890</strong></a></p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <div>
                <iframe 
                    title="address-google-map"
                    id="contact-us-address-map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.320488907235!2d80.1442488!3d12.9507152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x810a5fdb9adac981!2sAzacus%20Techno%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1598430368611!5m2!1sen!2sin"
                    // width="600" height="450" 
                    frameBorder="0" style={{border: 0}}
                    allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </div>
    );
}

export default ContactUs;