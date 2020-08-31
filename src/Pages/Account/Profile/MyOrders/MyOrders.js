import React from 'react';

import './MyOrders.css';
import OrderCardPending from './OrderCardPending/OrderCardPending';
import OrderCardFinished from './OrderCardFinished/OrderCardFinished';

const MyOrders = () => {
    return (
        <>
        <OrderCardFinished show_buttons={true}/>
        <OrderCardPending show_buttons={true}/>
        </>
    );
}

export default MyOrders;