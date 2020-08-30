import React, { useEffect, useState } from 'react';
import M from 'materialize-css';

import OverlappingFattyHr from '../../../../Utilities/Hr/OverlappingFattyHr/OverlappingFattyHr';
import AnchorButton from '../../../../Utilities/Link/AnchorButton/AnchorButton';

import './BasicInfo.css'

const BasicInfo = () => {
    //O - original
    const [firstName_O, setFirstName_O] = useState("Madhan");
    const [lastName_O, setLastName_O] = useState("Murali");
    const [email_O, setEmail_O] = useState("example@example.com");
    const [contactNumber_O, setContactNumber_O] = useState("+91 12345 67890");
    const [addressOne_O, setAddressOne_O] = useState([
        "No. 6, Ecommerce St,",
        "Chennai",
        "Tamil Nadu",
    ]);
    const [addressTwo_O, setAddressTwo_O] = useState([
        "No. 7, Ecommerce St,",
        "Chennai",
        "Tamil Nadu",
    ]);
    const [addressThree_O, setAddressThree_O] = useState([
        "No. 8, Ecommerce St,",
        "Chennai",
        "Tamil Nadu",
    ]);

    // these to be used with input boxes
    const [firstName, setFirstName] = useState(firstName_O);
    const [lastName, setLastName] = useState(lastName_O);
    const [email, setEmail] = useState(email_O);
    const [contactNumber, setContactNumber] = useState(contactNumber_O);
    const [addressOne, setAddressOne] = useState(addressOne_O);
    const [addressTwo, setAddressTwo] = useState(addressTwo_O);
    const [addressThree, setAddressThree] = useState(addressThree_O);

    const handleFirstNameChange = ( event ) => {
        setFirstName(event.target.value);
    }
    const handleLastNameChange = ( event ) => {
        setLastName(event.target.value);
    }
    const handleEmailChange = ( event ) => {
        setEmail(event.target.value);
    }
    const handleContactChange = (event) => {
        setContactNumber(event.target.value);
    }
    const handleAddressOneChange = (event, inputBox) => {
        let newAddressOne = [...addressOne];
        console.log(newAddressOne);
        switch (inputBox) {
            case 0: 
                newAddressOne[0] = event.target.value;
                setAddressOne(newAddressOne);
                break;
            case 1: 
                newAddressOne[1] = event.target.value;
                setAddressOne(newAddressOne);
                break;
            case 2: 
                newAddressOne[2] = event.target.value;
                setAddressOne(newAddressOne);
                break;
        }
    }
    const handleAddressTwoChange = (event, inputBox) => {
        let newAddressTwo = [...addressTwo];
        switch (inputBox) {
            case 0: 
                newAddressTwo[0] = event.target.value;
                setAddressTwo(newAddressTwo);
                break;
            case 1: 
                newAddressTwo[1] = event.target.value;
                setAddressTwo(newAddressTwo);
                break;
            case 2: 
                newAddressTwo[2] = event.target.value;
                setAddressTwo(newAddressTwo);
                break;
        }
    }
    const handleAddressThreeChange = (event, inputBox) => {
        let newAddressThree = [...addressThree];
        switch (inputBox) {
            case 0: 
                newAddressThree[0] = event.target.value;
                setAddressThree(newAddressThree);
                break;
            case 1: 
                newAddressThree[1] = event.target.value;
                setAddressThree(newAddressThree);
                break;
            case 2: 
                newAddressThree[2] = event.target.value;
                setAddressThree(newAddressThree);
                break;
        }
    }


    useEffect( () => {
        M.updateTextFields();
        let basicInfoModalElems = document.querySelectorAll(".basic-info-modals");

        const basicInfoModalOptions = {
            inDuration: 50,
            outDuration: 50
        };

        let basicInfoModalInstances = M.Modal.init(basicInfoModalElems, basicInfoModalOptions);
    });

    return (

        <>
        <div className="row">            
            <div className="col s1 m1 l3"></div>
            <div className="col s10 m10 l6 row card-panel">
                <h6 className="center-align">Name</h6>
                <OverlappingFattyHr 
                    base_hr_color={"#000000"}
                    top_hr_position="-3px"
                    top_hr_width={"50%"}
                    top_hr_color={"#000000"}
                    top_hr_height="4px"
                />
                <div className="row">
                    <div className="col s10">
                        <h6>{firstName_O} {lastName_O}</h6> 
                    </div>
                    <div className="col s2">
                        <a href="#name-modal" className="btn waves-effect waves-light btn-flat black-text modal-trigger right"><i className="material-icons">edit</i></a>
                    </div>
                </div>
                <div id="name-modal" className="modal basic-info-modals">
                    <form>
                        <div className="modal-content">
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="first-name" value={firstName} type="text" className="validate" onChange={ e => handleFirstNameChange(e) }/>
                                    <label htmlFor="first-name">First Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="last-name" value={lastName} type="text" className="validate" onChange={ e => handleLastNameChange(e) }/>
                                <label htmlFor="last-name">Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-flat">Submit</button>
                            <a className="modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col s1 m1 l3"></div>
        </div>

        <div className="row">            
            <div className="col s1 m1 l3"></div>
            <div className="col s10 m10 l6 row card-panel">
                <h6 className="center-align">Email</h6>
                <OverlappingFattyHr 
                    base_hr_color={"#000000"}
                    top_hr_position="-3px"
                    top_hr_width={"50%"}
                    top_hr_color={"#000000"}
                    top_hr_height="4px"
                />
                <div className="row">
                    <div className="col s10">
                        <h6>{email_O}</h6> 
                    </div>
                    <div className="col s2">
                        <a href="#email-modal" className="btn waves-effect waves-light btn-flat black-text right modal-trigger"><i className="material-icons">edit</i></a>
                    </div>
                    <div id="email-modal" className="modal basic-info-modals">
                        <form>
                            <div className="modal-content">
                                <div className="row">
                                <div className="input-field col s12 m12 l12">
                                        <input id="first-name" value={email} type="email" className="validate" onChange={ e => handleEmailChange(e) }/>
                                        <label htmlFor="first-name">Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn-flat">Submit</button>
                                <a className="modal-close waves-effect waves-green btn-flat">Close</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col s1 m1 l3"></div>
        </div>

        <div className="row">            
            <div className="col s1 m1 l3"></div>
            <div className="col s10 m10 l6 row card-panel">
                <h6 className="center-align">Contact Number</h6>
                <OverlappingFattyHr 
                    base_hr_color={"#000000"}
                    top_hr_position="-3px"
                    top_hr_width={"50%"}
                    top_hr_color={"#000000"}
                    top_hr_height="4px"
                />
                <div className="row">
                    <div className="col s10">
                        <h6>{contactNumber_O}</h6> 
                    </div>
                    <div className="col s2">
                        <a href="#contact-modal" className="btn waves-effect waves-light btn-flat black-text right modal-trigger"><i className="material-icons">edit</i></a>
                    </div>
                    <div id="contact-modal" className="modal basic-info-modals">
                        <form>
                            <div className="modal-content">
                                <div className="row">
                                <div className="input-field col s12 m12 l12">
                                        <input id="first-name" value={contactNumber} type="text" className="validate" onChange={ e => handleContactChange(e) }/>
                                        <label htmlFor="first-name">Contact Number</label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn-flat">Submit</button>
                                <a className="modal-close waves-effect waves-green btn-flat">Close</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col s1 m1 l3"></div>
        </div>

        <div className="row">            
            <div className="col s1 m1 l3"></div>
            <div className="col s10 m10 l6 row card-panel">
                <h6 className="center-align">Address #1</h6>
                <OverlappingFattyHr 
                    base_hr_color={"#000000"}
                    top_hr_position="-3px"
                    top_hr_width={"50%"}
                    top_hr_color={"#000000"}
                    top_hr_height="4px"
                />
                <div className="row valign-wrapper">
                    <div className="col s10">
                        <h6>{addressOne_O[0]}</h6> 
                        <h6>{addressOne_O[1]}</h6> 
                        <h6>{addressOne_O[2]}</h6> 
                    </div>
                    <div className="col s2">
                        <a href="#address-one-modal" className="btn waves-effect waves-light btn-flat black-text right modal-trigger"><i className="material-icons">edit</i></a>
                    </div>
                </div>
                <div id="address-one-modal" className="modal basic-info-modals">
                    <form>
                        <div className="modal-content">
                            <h6>Address #1</h6>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="address-one-line-one" value={addressOne[0]} type="text" className="validate" onChange={ e => handleAddressOneChange(e, 0) }/>
                                    <label htmlFor="address-one-line-one">Line 1</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="address-one-line-two" value={addressOne[1]} type="text" className="validate" onChange={ e => handleAddressOneChange(e, 1) }/>
                                <label htmlFor="address-one-line-two">Line 2</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="address-one-line-three" value={addressOne[2]} type="text" className="validate" onChange={ e => handleAddressOneChange(e, 2) }/>
                                <label htmlFor="address-one-line-three">Line 3</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-flat">Submit</button>
                            <a className="modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col s1 m1 l3"></div>
        </div>
        
        <div className="row">            
            <div className="col s1 m1 l3"></div>
            <div className="col s10 m10 l6 row card-panel">
                <h6 className="center-align">Address #2</h6>
                <OverlappingFattyHr 
                    base_hr_color={"#000000"}
                    top_hr_position="-3px"
                    top_hr_width={"50%"}
                    top_hr_color={"#000000"}
                    top_hr_height="4px"
                />
                <div className="row valign-wrapper">
                    <div className="col s10">
                        <h6>{addressTwo_O[0]}</h6> 
                        <h6>{addressTwo_O[1]}</h6> 
                        <h6>{addressTwo_O[2]}</h6> 
                    </div>
                    <div className="col s2">
                        <a href="#address-two-modal" className="btn waves-effect waves-light btn-flat black-text right modal-trigger"><i className="material-icons">edit</i></a>
                    </div>
                </div>
                <div id="address-two-modal" className="modal basic-info-modals">
                    <form>
                        <div className="modal-content">
                            <h6>Address #2</h6>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="address-two-line-one" value={addressTwo[0]} type="text" className="validate" onChange={ e => handleAddressTwoChange(e, 0) }/>
                                    <label htmlFor="address-two-line-one">Line 1</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="address-two-line-two" value={addressTwo[1]} type="text" className="validate" onChange={ e => handleAddressTwoChange(e, 1) }/>
                                <label htmlFor="address-two-line-two">Line 2</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="address-two-line-three" value={addressTwo[2]} type="text" className="validate" onChange={ e => handleAddressTwoChange(e, 2) }/>
                                <label htmlFor="address-two-line-three">Line 3</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-flat">Submit</button>
                            <a className="modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col s1 m1 l3"></div>
        </div>
        
        <div className="row">            
            <div className="col s1 m1 l3"></div>
            <div className="col s10 m10 l6 row card-panel">
                <h6 className="center-align">Address #3</h6>
                <OverlappingFattyHr 
                    base_hr_color={"#000000"}
                    top_hr_position="-3px"
                    top_hr_width={"50%"}
                    top_hr_color={"#000000"}
                    top_hr_height="4px"
                />
                <div className="row valign-wrapper">
                    <div className="col s10">
                        <h6>{addressThree_O[0]}</h6> 
                        <h6>{addressThree_O[1]}</h6> 
                        <h6>{addressThree_O[2]}</h6> 
                    </div>
                    <div className="col s2">
                        <a href="#address-three-modal" className="btn waves-effect waves-light btn-flat black-text right modal-trigger"><i className="material-icons">edit</i></a>
                    </div>
                </div>
                <div id="address-three-modal" className="modal basic-info-modals">
                    <form>
                        <div className="modal-content">
                            <h6>Address #3</h6>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="address-three-line-one" value={addressThree[0]} type="text" className="validate" onChange={ e => handleAddressThreeChange(e, 0) }/>
                                    <label htmlFor="address-three-line-one">Line 1</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="address-three-line-two" value={addressThree[1]} type="text" className="validate" onChange={ e => handleAddressThreeChange(e, 1) }/>
                                <label htmlFor="address-three-line-two">Line 2</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <input id="address-three-line-three" value={addressThree[2]} type="text" className="validate" onChange={ e => handleAddressThreeChange(e, 2) }/>
                                <label htmlFor="address-three-line-three">Line 3</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-flat">Submit</button>
                            <a className="modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col s1 m1 l3"></div>
        </div>
        </>
    );
}

export default BasicInfo;