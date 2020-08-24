import React, {useEffect} from 'react';

import M from 'materialize-css';

// import Logo from '../../../assets/img/header/header-logo-white.png';
import './SmallScreenSideMenu.css';
import AnchorWithLi from '../../../Utilities/Link/AnchorWithLi/AnchorWithLi';
import AnchorButtonWithLi from '../../../Utilities/Link/AnchorButtonWithLi/AnchorButtonWithLi';

const SmallScreenSideMenu = ({menu_button_color_class, link_color_class}) => {

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
            <AnchorWithLi using_router={false} href={"#!"} icon_name="person" title="Account" link_color_class={link_color_class}/>
            <AnchorWithLi using_router={false} href={"#!"} icon_name="favorite_border" title="Wishlist" link_color_class={link_color_class}/>
            <AnchorWithLi using_router={false} href={"#!"} icon_name="shopping_cart" title="Cart" link_color_class={link_color_class}/>
            {/* <AnchorWithLi href={"#!"} using_router={false} icon_name="category" title="Categories" link_color_class={link_color_class}/> */}
            <AnchorWithLi using_router={false} href={"#!"} icon_name="local_phone" title="Contacts" link_color_class={link_color_class}/>
        </ul>
  </>
    );
}

export default SmallScreenSideMenu;