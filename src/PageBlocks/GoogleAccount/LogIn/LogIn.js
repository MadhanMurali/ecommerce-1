import React, { useContext, useEffect } from 'react';

import {ReactComponent as GoogleIcon} from '../../../assets/img/account/GoogleLogo.svg';

import './LogIn.css';
import { GAuth2Context } from '../../../Globals/Config';

const GoogleLogin = ({button_color_class, other_classes, title}) => {

    const auth2 = useContext(GAuth2Context);

    useEffect( () => {
        if (!auth2)
            return;
        const googleLoginBtn = document.getElementById("google-sign-in-button");
       
        auth2.attachClickHandler(
            googleLoginBtn, {},
            (currentUser) => {
                //No need to do anything here with currentUser, signedInCallback will be called.
            },
            (error) => {
                //Will also get error if the user just closes the popup
                console.log('Google Sign In Error: ', error);
            }
        );
    }, [auth2]);

    return (
        <div>
            <button
                id = {"google-sign-in-button"}
                className={"btn waves-effect waves-light google-anchor " + button_color_class + " " + other_classes}
            >
                <GoogleIcon /><span> {title}</span>
            </button>
        </div>
    )
}

export default GoogleLogin;