import React from 'react';

import './LargeScreenList.css';
import AnchorButtonWithLi from '../../../Utilities/Link/AnchorButtonWithLi/AnchorButtonWithLi';

const LargeScreenList = ({button_color_class}) => {

    return (
        <ul id="nav-mobile" className="right">
            <div className="hide-on-med-and-down">
                {/* <AnchorButtonWithLi icon_name="category" button_color_class={button_color_class} 
                                    href={"#!"} title="Categories"/> */}
                <AnchorButtonWithLi icon_name="local_phone" button_color_class={button_color_class} 
                                    href={"#!"} title="Contacts" using_router={false}/>
                <AnchorButtonWithLi icon_name="favorite_border" button_color_class={button_color_class} 
                                    href={"#!"} title="Wishlist" using_router={false}/>
                <AnchorButtonWithLi icon_name="shopping_cart" button_color_class={button_color_class} 
                                    href={"#!"} title="Cart" using_router={false}/>

                { /** Soon to be removed to add support for image -- it is just a placeholder */}
                <li>
                    <a href="#!" className={"btn-floating btn-large waves-effect waves-light " + button_color_class}>
                        <i className="large material-icons">person</i>
                    </a>
                </li>
            </div>
        </ul>
    );
}

export default LargeScreenList;