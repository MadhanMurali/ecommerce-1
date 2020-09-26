import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import M from 'materialize-css';

// import Logo from '../../../assets/img/header/header-logo-white.png';
import './SmallScreenSideMenu.css';
import AnchorWithLi from '../../../Utilities/Link/AnchorWithLi/AnchorWithLi';
import AnchorButtonWithLi from '../../../Utilities/Link/AnchorButtonWithLi/AnchorButtonWithLi';

import GoogleLogin from '../../GoogleAccount/LogIn/LogIn';

const SmallScreenSideMenu = ({menu_button_color_class, link_color_class, options_button_color_class}) => {

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

    const loggedInButtons =  <>
                                <li className="center">
                                    <Link to={"/profile/"} className={"btn-floating btn-large waves-effect waves-light small-screen-account " + options_button_color_class}>
                                        <img className="center-profile-image" src = {user.image_address} alt=""/>
                                    </Link>
                                </li>
                                <AnchorWithLi using_router={true} href={"/profile/wishlist"} icon_name="favorite_border" title="Wishlist" link_color_class={link_color_class}/>
                                <AnchorWithLi using_router={true} href={"/profile/cart"} icon_name="shopping_cart" title="Cart" link_color_class={link_color_class}/>
                                {/* <AnchorWithLi href={"#!"} using_router={false} icon_name="category" title="Categories" link_color_class={link_color_class}/> */}
                                <AnchorWithLi using_router={true} href={"/contact-us"} icon_name="local_phone" title="Contacts" link_color_class={link_color_class}/>
                            </>

    const loggedOutButtons = <>
                                <li className="center-align">
                                    <GoogleLogin button_color_class="white" other_classes="black-text" title='Sign In'/>
                                </li>
                            </>

    return (
    <>
        <ul id="nav-mobile" className="right show-on-medium-and-down hide-on-large-only">
            <AnchorButtonWithLi using_router={false}
                icon_name={"menu"} href={"#"} title="Menu" data_target="slide-out" 
                button_color_class={menu_button_color_class} other_classes={"sidenav-trigger"}/>
        </ul>
        <ul id="slide-out" className="sidenav">
            {/* <li>
                <div className="user-view">
                    <div className="background">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </div>
            </li> */}
            {
                (!user.logged_in)
                    ?   loggedOutButtons
                    :   loggedInButtons
            }
        </ul>
  </>
    );
}

export default SmallScreenSideMenu;