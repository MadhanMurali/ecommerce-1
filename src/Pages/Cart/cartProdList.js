import React, { Component } from 'react';

import './cart.css';
export default function ProductList(props) {
      
    return (
      
          <div className="cart-container cart-products">
          
          <table class="centered " >
            <thead>
              <tr>
                  <th>Product</th>
                  <th>Product Description</th>
                  <th>Item Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th> </th>
              </tr>
            </thead>
            {props.products.map((product, index) => {
            return (
                
              <tbody className="items-in-cart" key={index}>
               <tr>
                <td><a href="#">
                      <img src={product.image} alt={product.name} />
                    </a></td>
                <td ><a href="#">{product.name}</a></td>
                <td>{formatCurrency(product.price)}</td>
                <td className="cart-detail cart-quantity">      
                    <input
                      type="number"
                      className="cart-quantity cart-input"
                      step="1"
                      value={product.quantity}
                      onChange={props.onChangeProductQuantity.bind(this, index)}
                    /></td>
                <td>{formatCurrency(product.quantity*product.price)}</td>
                <td><a class="btn-floating red">
                  <i class="material-icons" onClick={props.onRemoveProduct.bind(this, index)}>delete</i></a>
                </td>
               </tr>
            </tbody>    );
          })}
          </table>
        </div>
     );
  }
  function formatCurrency(value) {
    return Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR"
    });
  }