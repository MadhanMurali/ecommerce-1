import React from 'react';

import './HelplineAddress.css';

const HelplineAddress = ({helplineNumber,addressLineOne, addressLineTwo, icon_color_class, 
                            title_color_class, number_color_class, address_color_class}) => {
    return (
        <div className="row valign-wrapper">
            <div className="col s6 footer-helpline-icon-div">
                <p className="">
                    <i className={"material-icons large footer-helpline-icon " + icon_color_class}>
                        headset_mic
                    </i>
                </p>
            </div>
            <div className="col s6 footer-helpline-heading-div ">
                <h4 className={"footer-helpline-heading " + title_color_class}>Helpline</h4>
                <a className={number_color_class} href={"tel:" + helplineNumber}>
                    <strong>{helplineNumber}</strong>    
                </a>
            </div>
            <div className="col s12 center-align">
                <p className={address_color_class}>{addressLineOne} {addressLineTwo}</p>
            </div>
        </div>
    );
}

export default HelplineAddress;