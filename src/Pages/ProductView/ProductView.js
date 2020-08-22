import React, { useEffect } from 'react';

import M from 'materialize-css';

import Product from './Product/Product';
import "./ProductView.css";

import Description from './Description/Description';
import AnchorWithLi from '../../Utilities/Link/AnchorWithLi/AnchorWithLi';
import UserReview from './UserReview/UserReview';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';


const ProductView = () => {

    useEffect( () => {
        const options = {
            duration: 50,
        }

        const productInfoTab = document.querySelector(".product-info-tab");

        M.Tabs.init(productInfoTab, options);
    }, []);

    return (
        <div >
            <Product />
            <div className="">
                <div className="row">
                    <div className="col s12 center-align">
                        <ul className="tabs product-info-tab">
                            <AnchorWithLi li_classes={"tab col s12 m4 l4"} title="Description" href="#product-description"/>
                            <AnchorWithLi li_classes={"tab col s12 m4 l4"} title="Additional Information" href="#product-additional-information"/>
                            <AnchorWithLi li_classes={"tab col s12 m4 l4"} title="Review" href="#product-user-reviews"/>
                        </ul>
                    </div>
                    <div id="product-description" className="col s12">
                        <Description />
                    </div>
                    <div id="product-additional-information" className="col s12">
                        <AdditionalInfo />
                    </div>
                    <div id="product-user-reviews" className="col s12">
                        <UserReview />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductView;