import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import './LargeScreenList.css';
import AnchorButtonWithLi from '../../../Utilities/Link/AnchorButtonWithLi/AnchorButtonWithLi';
import GoogleLogin from '../../GoogleAccount/LogIn/LogIn';

const LargeScreenList = ({button_color_class}) => {

    const user = useSelector(state => state.user);

    const loggedInButtons = <>
                                {/* <AnchorButtonWithLi icon_name="category" button_color_class={button_color_class} 
                                                    href={"#!"} title="Categories"/> */}
                                <AnchorButtonWithLi icon_name="local_phone" button_color_class={button_color_class} 
                                                    href={"/contact-us"} title="Contacts" using_router={true}/>
                                <AnchorButtonWithLi icon_name="favorite_border" button_color_class={button_color_class} 
                                                    href={"/profile/wishlist"} title="Wishlist" using_router={true}/>
                                <AnchorButtonWithLi icon_name="shopping_cart" button_color_class={button_color_class} 
                                                    href={"/profile/cart"} title="Cart" using_router={true}/>
                                <li>
                                    <Link to={"/profile/"} className={"btn-floating btn-large waves-effect waves-light " + button_color_class}>
                                        <img className="center-profile-image" src = {user.image_address} alt=""/>
                                    </Link>
                                </li>
                            </>

    const loggedOutButtons = <>
                                <li>
                                    <GoogleLogin button_color_class="white" other_classes="black-text" title='Sign In'/>
                                </li>
                             </>

    return (
        <ul id="nav-mobile" className="right">
            <div className="hide-on-med-and-down">
                {
                    (!user.logged_in)
                        ?   loggedOutButtons
                        :   loggedInButtons
                }
            </div>
        </ul>
    );
}

export default LargeScreenList;