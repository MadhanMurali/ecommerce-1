import React from 'react'
import {ReactComponent as GoogleIcon} from '../../../assets/img/account/GoogleLogo.svg';
import { useGoogleLogout } from 'react-google-login';

import { GOOGLE_CLIENT_ID as googleClientId, LOCAL_STORAGE_NAMES } from '../../../Globals/Config';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Globals/ReduxStores/UserSlice';

const GoogleLogout = ({button_color_class, other_classes, title}) => {

    const dispatch = useDispatch();

    const onSuccess = () => {
        localStorage.removeItem(LOCAL_STORAGE_NAMES.PREVIOUS_SIGN_IN_METHOD);
        localStorage.removeItem(LOCAL_STORAGE_NAMES.PREVIOUSLY_SIGNED_IN);
        
        dispatch( logout() );
    }

    const onFailure = (error) => {
        console.log("Logout failed (google): " + error);
    }

    const { signOut } = useGoogleLogout({
        clientId: googleClientId,
        onLogoutSuccess: onSuccess,
        onFailure: onFailure,
    });

    return (
        <div>
            <button 
                onClick={ signOut } 
                className={"btn waves-effect waves-light google-anchor " + button_color_class + " " + other_classes} 
                href={"#!"} 
            >
                <GoogleIcon /><span> {title}</span>
            </button>
        </div>
    )
}

export default GoogleLogout;