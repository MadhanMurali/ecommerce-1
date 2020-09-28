import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Globals/ReduxStores/UserSlice';
import AnchorButton from '../../../Utilities/Link/AnchorButton/AnchorButton';

const NormalAccountLogout = ({button_color_class, icon_name, title, icon_color_class}) => {

    const dispatch = useDispatch();

    const onSignOut = (event) => {
        event.preventDefault();
        dispatch( logout() );
    }

    return (
        <AnchorButton icon_name={icon_name} button_color_class={button_color_class} 
            href={"#!"} title={title} using_router={false} onClick={ onSignOut } icon_color_class={icon_color_class}/>
    );
}

export default NormalAccountLogout;