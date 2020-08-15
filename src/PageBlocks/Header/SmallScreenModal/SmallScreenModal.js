import React, {useEffect} from 'react';

import M from 'materialize-css';

import './SmallScreenModal.css';

import SuperNormalAnchor from '../../../Utilities/Link/SuperNormalAnchor/SuperNormalAnchor';
import AnchorButtonWithLi from '../../../Utilities/Link/AnchorButtonWithLi/AnchorButtonWithLi';

const SmallScreenModal = ({menu_button_color_class, link_color_class}) => {

    useEffect(() => {
        let modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
    }, []);

    return (
        <>
        <ul id="nav-mobile" className="right show-on-medium-and-down hide-on-large-only">
            <div className="">
                <AnchorButtonWithLi using_router={false}
                    icon_name={"menu"} href={"#header-menu-modal" } title="Menu"
                    button_color_class={menu_button_color_class} other_classes={"modal-trigger"}/>
            </div>

            <div id="header-menu-modal" className="modal bottom-sheet">
                <div className="modal-content">
                    <div className="row">
                        <div className="col s5 right-align">
                        </div>
                        <div className="col s7 right-align header-small-screen-links">
                            <SuperNormalAnchor href={"#!"} icon_name="person" title="Account" link_color_class={link_color_class} />
                            <SuperNormalAnchor href={"#!"} icon_name="favorite_border" title="Wishlist" link_color_class={link_color_class} />
                            <SuperNormalAnchor href={"#!"} icon_name="shopping_cart" title="Cart" link_color_class={link_color_class} />
                            {/* <SuperNormalAnchor href={"#!"} icon_name="category" title="Categories" link_color_class={link_color_class} /> */}
                            <SuperNormalAnchor href={"#!"} icon_name="local_phone" title="Contacts" link_color_class={link_color_class} />
                        </div>
                    </div>
                </div>
            </div>
        </ul>
        </>
    );
}

export default SmallScreenModal;