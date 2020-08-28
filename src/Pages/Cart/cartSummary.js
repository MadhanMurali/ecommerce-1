
import React, { Component } from 'react';

import './cart.css';
export default function Summary(props) {
    const subTotal = props.products.reduce((total, product) => {
      return total + product.price * +product.quantity;
    }, 0);
    const discount = subTotal * props.discount / 100;
    const tax = props.tax;
    const total = subTotal - discount + tax;
    const itemCount = props.products.reduce((quantity, product) => {
        return quantity + +product.quantity;
      },0);
    return (
      <div className="row">
        <div className="col m6 l6"  ></div>
        <div className="col m6 l6">
            
        <div className="cart-promotion ">

          <div className="row">
            <div className="col s6 m7 l9"></div>
            <div className="col s6 m5 l3">
            <label htmlFor="promo-code" className="cart-label">Have a Promo Code?</label>
          <input type="text" className="cart-input" onChange={props.onEnterPromoCode} />
          <button type="button" className="cart-button"onClick={props.checkPromoCode} />
          </div>
        </div>
       
         
        </div>
  
        <div className=" cart-summary">
            

          <ul className="cart-ul">
              <li className="cart-li">
              <span className="cart-count">{itemCount} items in the cart</span>
              </li>
            <li className="cart-li">
              Subtotal <span>{formatCurrency(subTotal)}</span>
            </li>
            {discount > 0 && (
              <li className="cart-li">
                Discount <span>{formatCurrency(discount)}</span>
              </li>
            )}
            <li className="cart-li">
              Delivery Charge <span>{formatCurrency(tax)}</span>
            </li>
            <li className="total cart-li">
              Total <span>{formatCurrency(total)}</span>
            </li>
            
          </ul>
        </div>
  
        
        </div>
      </div>
    );
  }

  
  function formatCurrency(value) {
    return Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR"
    });
  }
  