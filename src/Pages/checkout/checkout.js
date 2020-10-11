import React, { Component } from 'react';
import Shipping from './shipping';
import Payment from './payment';
import ReviewOrder from './reviewOrder';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import './checkout.css';
export default class CheckOut extends Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
  render() {

    return (
      <div>



        <div className="row">
          <div className="col s12 sno-pd ">
            <ul className="tabs stabs-icon" ref={Tabs => {
            this.Tabs = Tabs;
          }}>
              <li className="tab col s3"><a className="active" href="#shipping-adrs" ><i className="material-icons">local_shipping</i>Shipping Address</a></li>
              <li className="tab col s3"><a href="#order-review"><i className="material-icons">shopping_bag</i>Review your Order</a></li>
              <li className="tab col s3"><a href="#payment-details"><i className="material-icons">payment</i>Payment Details</a></li>
              

            </ul>


          </div>
        </div>
        <div id="shipping-adrs" className="col s12">
          <Shipping />
        </div>
        <div id="order-review" className="col s12">
          <ReviewOrder/>
        </div>
        <div id="payment-details" className="col s12">
          <Payment/>
        </div>
        

      </div>


    );



  }

}