import React from 'react';

import './MyOrders.css';

import ProductImage7 from '../../../../assets/img/product/ProductSample7.jpg';
import ProductImage8 from '../../../../assets/img/product/ProductSample8.jpg';

import AnchorButton from '../../../../Utilities/Link/AnchorButton/AnchorButton';

const MyOrders = () => {
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
                <div className="row valign-wrapper my-order">
                    <div className="col s12 m12 l6">
                        <div className="my-orders-product-flex-container">
                            <div className="my-orders-product-img-div">
                                <img alt="product" src={ProductImage7}/>
                            </div>
                            <div className="my-orders-product-name-div">
                                <h6>
                                    {productName}
                                </h6>
                                <p><i>Ordered Date: {orderedDate}</i></p>
                                <p>Quantity: {quantity}</p>
                                <p>Price: {price}</p>
                                <p className="my-orders-product-total-price">Total Price: {totalPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m12 l6">
                        <p className="left-align my-orders-product-address">Shipped to {address}</p>
                        <p className="left-align my-orders-product-order-no">Order #: {orderNumber}</p>
                        <p className="left-align my-orders-product-order-status">Status: {status1}</p>
                    </div>
                </div>
                
                <div className="my-orders-product-options center-align">
                    <AnchorButton 
                        href={""} title="Invoice"
                        using_router={false}
                        other_classes={"black-text btn-flat"} icon_name={""}/>
                    <AnchorButton 
                        href={""} title="Order Again"
                        using_router={false}
                        other_classes={"black-text btn-flat"} icon_name={""}/>
                </div>
            </div>
        </div>
        <div className="row card-panel">
            <div className="col s12 m12 l12">
                <div className="row valign-wrapper my-order">
                    <div className="col s12 m12 l6">
                        <div className="my-orders-product-flex-container">
                            <div className="my-orders-product-img-div">
                                <img alt="product" src={ProductImage7}/>
                            </div>
                            <div className="my-orders-product-name-div">
                                <h6>
                                    {productName}
                                </h6>
                                <p><i>Ordered Date: {orderedDate}</i></p>
                                <p>Quantity: {quantity}</p>
                                <p>Price: {price}</p>
                                <p className="my-orders-product-total-price">Total Price: {totalPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m12 l6">
                        <p className="left-align my-orders-product-address">Shipping to {address}</p>
                        <p className="left-align my-orders-product-order-no">Order #: {orderNumber}</p>
                        <p className="left-align my-orders-product-order-status">Status: {status2}</p>
                    </div>
                </div>
                
                <div className="my-orders-product-options center-align">
                    <AnchorButton 
                        href={""} title="Invoice"
                        using_router={false}
                        other_classes={"black-text btn-flat"} icon_name={""}/>
                    <AnchorButton 
                        href={""} title="Track Order"
                        using_router={false}
                        other_classes={"black-text btn-flat"} icon_name={""}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default MyOrders;