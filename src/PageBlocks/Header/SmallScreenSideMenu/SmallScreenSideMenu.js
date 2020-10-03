import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import M from 'materialize-css';

// import Logo from '../../../assets/img/header/header-logo-white.png';
import './SmallScreenSideMenu.css';
// import AnchorWithLi from '../../../Utilities/Link/AnchorWithLi/AnchorWithLi';
import AnchorButtonWithLi from '../../../Utilities/Link/AnchorButtonWithLi/AnchorButtonWithLi';

import GoogleLogout from '../../GoogleAccount/LogOut/LogOut';
import { CONTACT_US, PROFILE, SIGNUP, SIGNIN } from '../../../Globals/PathConstants';

import NormalAccountLogout from '../../NormalAccountRedirect/Logout/Logout';

const SmallScreenSideMenu = ({menu_button_color_class, title_color_class, options_button_color_class, icon_color_class}) => {

    useEffect(() => {
        const sideNav = document.querySelectorAll('.sidenav');

        const options = {
            inDuration: 50,
            outDuration: 50,
            edge: 'right',
            draggable: true,
        }

        M.Sidenav.init(sideNav, options);
    }, []);

    const user = useSelector(state => state.user);

    const profilePic =  (!user.image_address)
                            ? <i class="material-icons">account_circle</i>
                            : <img className="center-profile-image" src = {user.image_address} alt=""/>;

    const signOutButton = (user.social_id_type === "google")
                            ? <GoogleLogout 
                                button_color_class="teal darken-3" 
                                icon_name="exit_to_app"
                                icon_color_class="white-text"
                                title='Sign Out'/>
                            : <NormalAccountLogout 
                                button_color_class={options_button_color_class} icon_name="exit_to_app" 
                                title="Sign Out" icon_color_class="white-text"/>;

    const loggedInButtons =  <>
                                <li className="center">
                                    <Link to={PROFILE} className={"btn-floating btn-large waves-effect waves-light small-screen-account " + options_button_color_class}>
                                        {profilePic}
                                    </Link>
                                </li>
                                <AnchorButtonWithLi using_router={true} href={ PROFILE + "/wishlist" } icon_name="favorite_border" 
                                    title="Wishlist" other_classes={title_color_class} icon_color_class={icon_color_class} 
                                    button_color_class={options_button_color_class}/>
                                <AnchorButtonWithLi using_router={true} href={ PROFILE + "/cart" } icon_name="shopping_cart" 
                                    title="Cart" other_classes={title_color_class} icon_color_class={icon_color_class} 
                                    button_color_class={options_button_color_class}/>
                                {/* <AnchorWithLi href={"#!"} using_router={false} icon_name="category" title="Categories" link_color_class={link_color_class}/> */}
                                <AnchorButtonWithLi using_router={true} href={CONTACT_US} icon_name="local_phone" 
                                    title="Contacts" other_classes={title_color_class} icon_color_class={icon_color_class} 
                                    button_color_class={options_button_color_class}/>
                                <li className="center-align">
                                    {signOutButton}
                                </li>
                            </>

    const loggedOutButtons = <>
                                <AnchorButtonWithLi icon_name="login" button_color_class={options_button_color_class} 
                                    href={SIGNIN} title="Sign In" using_router={true} icon_color_class={icon_color_class}
                                    button_color_class={options_button_color_class}/>
                                <AnchorButtonWithLi icon_name="person_add_alt_1" button_color_class={options_button_color_class} 
                                    href={SIGNUP} title="Sign Up" using_router={true} icon_color_class={icon_color_class}
                                    button_color_class={options_button_color_class}/>
                            </>

    return (
    <>
        <ul id="nav-mobile" className="right show-on-medium-and-down hide-on-large-only">
            <AnchorButtonWithLi using_router={false}
                icon_name={"menu"} href={"#"} title="Menu" data_target="slide-out" 
                button_color_class={menu_button_color_class} other_classes={"sidenav-trigger"}/>
        </ul>
        <ul id="slide-out" className="sidenav sidenav-close">
            {/* <li>
                <div className="user-view">
                    <div className="background">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </div>
            </li> */}
            {
                (!user.signed_in)
                    ?   loggedOutButtons
                    :   loggedInButtons
            }
        </ul>
  </>
    );
}

export default SmallScreenSideMenu;