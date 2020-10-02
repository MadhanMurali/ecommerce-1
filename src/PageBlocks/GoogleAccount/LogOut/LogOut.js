import React, { useContext, useEffect, useState } from 'react'
// import {ReactComponent as GoogleIcon} from '../../../assets/img/account/GoogleLogo.svg';

import { GAuth2Context, LOCAL_STORAGE_NAMES } from '../../../Globals/Config';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Globals/ReduxStores/UserSlice';
import AnchorButton from '../../../Utilities/Link/AnchorButton/AnchorButton';

const GoogleLogout = ({button_color_class, other_classes, title, icon_name, icon_color_class}) => {

    const dispatch = useDispatch();

    const auth2 = useContext(GAuth2Context);

    const [googleAuth2, setGoogleAuth2] = useState(0);

    useEffect ( () => {
        if (!auth2)
            return;
        setGoogleAuth2(auth2);
    }, [auth2]);

    const signOut = (event) => {
        event.preventDefault();
        if(googleAuth2) {
            googleAuth2
                .signOut()
                .then(
                    () => {
                        localStorage.removeItem(LOCAL_STORAGE_NAMES.PREVIOUS_SIGN_IN_METHOD);
                        localStorage.removeItem(LOCAL_STORAGE_NAMES.PREVIOUSLY_SIGNED_IN);
                        dispatch( logout() );
                    }
                )
                .catch( err => console.log("Google Sign Out Error", err));
            
        }
    }

    return (
            // <button 
            //     // onClick={ signOut } 
            //     className={"btn waves-effect waves-light google-anchor " + button_color_class + " " + other_classes} 
            //     href={"#!"} 
            // >
            //     <GoogleIcon /><span> {title}</span>
            // </button>
        <AnchorButton 
            icon_name={icon_name} 
            other_classes={other_classes}
            button_color_class={button_color_class} 
            href={"#!"} title={title} using_router={false} 
            onClick={ signOut }
            icon_color_class={icon_color_class}/>
    )
}

export default GoogleLogout;