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



        <div class="row">
          <div class="col s12 sno-pd ">
            <ul class="tabs stabs-icon" ref={Tabs => {
            this.Tabs = Tabs;
          }}>
              <li class="tab col s3"><a class="active" href="#shipping-adrs" ><i class="material-icons">local_shipping</i>Shipping Address</a></li>
              <li class="tab col s3"><a href="#order-review"><i class="material-icons">shopping_bag</i>Review your Order</a></li>
              <li class="tab col s3"><a href="#payment-details"><i class="material-icons">payment</i>Payment Details</a></li>
              

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