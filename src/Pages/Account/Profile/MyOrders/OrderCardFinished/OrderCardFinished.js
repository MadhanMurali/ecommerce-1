import React from 'react';

import ProductImage7 from '../../../../../assets/img/product/ProductSample7.jpg';
import AnchorButton from '../../../../../Utilities/Link/AnchorButton/AnchorButton';

import "../OrderCard.css";

const OrderCardPending = ({show_buttons}) => {
    const productName = "Product Name is Lorem Ipsum";
    const orderedDate = "12-12-2020";
    const quantity = "2";
    const price = "2000";
    const totalPrice = "4000";
    const orderNumber = "2-12-2022-12-2022-12-202"
    const address = "Address #1";
    const status1 = "Delivered";
    const status2 = "Pending";

    return (
        <>
        <div className="row card-panel">
            <div className="col s12 m12 l12">
                <div className="row valign-wrapper order-card">
                    <div className="col s12 m12 l6">
                        <div className="order-card-product-flex-container">
                            <div className="order-card-product-img-div">
                                <img alt="product" src={ProductImage7}/>
                            </div>
                            <div className="order-card-product-name-div">
                                <h6>
                                    {productName}
                                </h6>
                                <p><i>Ordered Date: {orderedDate}</i></p>
                                <p>Quantity: {quantity}</p>
                                <p>Price: {price}</p>
                                <p className="order-card-product-total-price">Total Price: {totalPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m12 l6">
                        <p className="left-align order-card-product-address">Shipped to {address}</p>
                        <p className="left-align order-card-product-order-no">Order #: {orderNumber}</p>
                        <p className="left-align order-card-product-order-status">Status: {status1}</p>
                    </div>
                </div>

                {
                    (show_buttons)
                        ?   <div className="order-card-product-options center-align">
                                <AnchorButton 
                                    href={""} title="Invoice"
                                    using_router={false}
                                    other_classes={"black-text btn-flat"} icon_name={""}/>
                                <AnchorButton 
                                    href={""} title="Order Again"
                                    using_router={false}
                                    other_classes={"black-text btn-flat"} icon_name={""}/>
                            </div>
                        :   <></>
                }
            </div>
        </div>
        </>
    );
}

export default OrderCardPending;