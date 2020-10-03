import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import './LargeScreenList.css';
import AnchorButtonWithLi from '../../../Utilities/Link/AnchorButtonWithLi/AnchorButtonWithLi';
import GoogleLogout from '../../GoogleAccount/LogOut/LogOut';
import NormalAccountLogout from '../../NormalAccountRedirect/Logout/Logout';

import { CONTACT_US, PROFILE, SIGNIN, SIGNUP } from '../../../Globals/PathConstants';
import { SIGN_IN_METHOD } from '../../../Globals/Config';

const LargeScreenList = ({button_color_class}) => {

    const user = useSelector(state => state.user);

    const profilePic =  (!user.image_address)
                            ? <i class="material-icons">account_circle</i>
                            : <img className="center-profile-image" src = {user.image_address} alt=""/>;

    const signOutButton = (user.social_id_type === SIGN_IN_METHOD.GOOGLE)
                            ? <GoogleLogout 
                                button_color_class="teal darken-3" icon_name="exit_to_app" title='Sign Out'/>
                            : <NormalAccountLogout 
                                button_color_class="teal darken-3" icon_name="exit_to_app" title="Sign Out"/>;

    const loggedInButtons = <>
                                {/* <AnchorButtonWithLi icon_name="category" button_color_class={button_color_class} 
                                                    href={"#!"} title="Categories"/> */}
                                <AnchorButtonWithLi icon_name="local_phone" button_color_class={button_color_class} 
                                                    href={CONTACT_US} title="Contacts" using_router={true}/>
                                <AnchorButtonWithLi icon_name="favorite_border" button_color_class={button_color_class} 
                                                    href={ PROFILE + "/wishlist" } title="Wishlist" using_router={true}/>
                                <AnchorButtonWithLi icon_name="shopping_cart" button_color_class={button_color_class} 
                                                    href={ PROFILE + "/cart" } title="Cart" using_router={true}/>
                                <li>
                                    { signOutButton }
                                </li>
                                <li>
                                    <Link to={PROFILE} className={"btn-floating btn-large waves-effect waves-light " + button_color_class}>
                                        { profilePic }
                                    </Link>
                                </li>
                            </>

    const loggedOutButtons = <>
                                <AnchorButtonWithLi icon_name="login" button_color_class={button_color_class} 
                                    href={SIGNIN} title="Sign In" using_router={true}/>
                                <AnchorButtonWithLi icon_name="person_add_alt_1" button_color_class={button_color_class} 
                                    href={SIGNUP} title="Sign Up" using_router={true}/>
                             </>

    return (
        <ul id="nav-mobile" className="right">
            <div className="hide-on-med-and-down">
                {
                    (!user.signed_in)
                        ?   loggedOutButtons
                        :   loggedInButtons
                }
            </div>
        </ul>
    );
}

export default LargeScreenList;