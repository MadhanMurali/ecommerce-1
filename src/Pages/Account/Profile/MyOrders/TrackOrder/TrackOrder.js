import React from 'react';

import "./TrackOrder.css";
import OrderCardPending from '../OrderCardPending/OrderCardPending';

const ORDER_STATUS = [
    "Ordered", "Packed", "Shipped", "Delivered"
];

const TrackOrder = () => {
    const orderedDate = "12-12-2020";
    const orderNumber = "2-12-2022-12-2022-12-202";

    const packedDate = "13-12-2020";
    const shippedDate = "14-12-2020";
    const deliveredDate = "15-12-2020";

    const address = [
        "No. 6, Ecommerce St,",
        "Chennai",
        "Tamil Nadu",
    ]

    const orderedMessage =  <span>
                                Ordered on {orderedDate}
                                <br/>
                                Order #: {orderNumber}
                            </span>
    const packedMessage =  <span>
                                Packed on {packedDate}
                            </span>
    const shippedMessage =  <span>
                                Shipped on {shippedDate} to:
                                <br/>
                                <br/>
                                {address[0]}
                                <br/>
                                {address[1]}
                                <br/>
                                {address[2]}
                            </span>
    const deliveredMessage =  <>
                                Expected to be delivered on {deliveredDate} to: 
                                <br/>
                                <br/>
                                {address[0]}
                                <br/>
                                {address[1]}
                                <br/>
                                {address[2]}
                            </>
    return (
        <>
        <OrderCardPending />
        <div className="container hide-on-small-only">
            <ul className="progress-tracker progress-tracker--text">
                <li className="progress-step is-complete">
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h6 className="progress-title">{ORDER_STATUS[0]}</h6>
                        {orderedMessage}
                    </div>
                </li>
                <li className="progress-step is-complete">
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h6 className="progress-title">{ORDER_STATUS[1]}</h6>
                        {packedMessage}
                    </div>
                </li>
                <li className="progress-step is-complete">
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h6 className="progress-title">{ORDER_STATUS[2]}</h6>
                        {shippedMessage}
                    </div>
                </li>
                <li className="progress-step">
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h6 className="progress-title">{ORDER_STATUS[3]}</h6>
                        {deliveredMessage}
                    </div>
                </li>
            </ul>
        </div>
        <div className="container hide-on-med-and-up">
            <ul className="progress-tracker progress-tracker--vertical">
                <li className="progress-step is-complete">
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h6 className="progress-title">{ORDER_STATUS[0]}</h6>
                        {orderedMessage}
                    </div>
                </li>
                <li className="progress-step is-complete">
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h6 className="progress-title">{ORDER_STATUS[1]}</h6>
                        {packedMessage}
                    </div>
                </li>
                <li className="progress-step is-complete">
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h6 className="progress-title">{ORDER_STATUS[2]}</h6>
                        {shippedMessage}
                    </div>
                </li>
                <li className="progress-step">
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h6 className="progress-title">{ORDER_STATUS[3]}</h6>
                        {deliveredMessage}
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}

export default TrackOrder;