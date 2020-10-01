import React from 'react';

import {ReactComponent as GoogleIcon} from '../../../assets/img/account/GoogleLogo.svg';
import { useSelector } from 'react-redux';

import './LogIn.css';
import GoogleAccountInit from '../GoogleAccountInit';

const GoogleLogin = ({button_color_class, other_classes, title}) => {

    const user = useSelector(state => state.user);

    const signIn = GoogleAccountInit();

    return (
        <div>
            <a 
                onClick={signIn}
                className={"btn waves-effect waves-light google-anchor " + button_color_class + " " + other_classes} 
                href={"#!"} 
            >
                <GoogleIcon /><span> {title}</span>
            </a>
        </div>
    )
}



export default GoogleLogin;