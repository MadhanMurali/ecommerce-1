
import React, { Component } from 'react';

import './cart.css';


  
  function ProductList(props) {
      
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
  
  function Summary(props) {
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
  
        <div className="cart-checkout">
          <button type="button" className="cart-button">Check Out</button>
        </div>
        </div>
      </div>
    );
  }
  
 export default class Cart extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        products: [
          {
            image: "https://via.placeholder.com/200x150",
            name: "PRODUCT ITEM NUMBER 1",
            description: "Description for product item number 1",
            price: 5,
            quantity: 2
          },
          {
            image: "https://via.placeholder.com/200x150",
            name: "PRODUCT ITEM NUMBER 2",
            description: "Description for product item number 1",
            price: 10,
            quantity: 1
          }
        ],
        tax: 5,
        promotions: [
          {
            code: "SUMMER",
            discount: "50%"
          },
          {
            code: "AUTUMN",
            discount: "40%"
          },
          {
            code: "WINTER",
            discount: "30%"
          }
        ],
        promoCode: "",
        discount: 0,
        itemCount: 0
      };
    }
  
    onChangeProductQuantity = (index, event) => {
      const products = this.state.products;
      const value = event.target.value;
      const valueInt = parseInt(value);
  
      // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
      if (value === "") {
        products[index].quantity = value;
      } else if (valueInt > 0 && valueInt < 100) {
        products[index].quantity = valueInt;
      }
  
      this.setState({ products });
    };
  
    onRemoveProduct = i => {
      const products = this.state.products.filter((product, index) => {
        return index != i;
      });
  
      this.setState({ products });
    };
  
    onEnterPromoCode = event => {
      this.setState({
        promoCode: event.target.value
      });
    };
  
    checkPromoCode = () => {
      const promotions = this.state.promotions;
  
      for (var i = 0; i < promotions.length; i++) {
        if (this.state.promoCode === promotions[i].code) {
          this.setState({
            discount: parseFloat(promotions[i].discount.replace("%", ""))
          });
          return;
        }
      }
  
      alert("Sorry, the Promotional code you entered is not valid!");
    };
  
    render() {
      const products = this.state.products;
  
      return (
        <div>
         
          {products.length > 0 ? (
            <div>
              <ProductList
                products={products}
                onChangeProductQuantity={this.onChangeProductQuantity}
                onRemoveProduct={this.onRemoveProduct}
              />
  
              <Summary
                products={products}
                discount={this.state.discount}
                tax={this.state.tax}
                onEnterPromoCode={this.onEnterPromoCode}
                checkPromoCode={this.checkPromoCode}
              />
            </div>
          ) : (
            <div className="cart-empty-product">
              <h3>There are no products in your cart.</h3>
              <button className="cart-button">Shop now</button>
            </div>
          )}
        </div>
      );
    }
  }
  
  
  
  function formatCurrency(value) {
    return Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR"
    });
  }
  