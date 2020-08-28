
import React, { Component } from 'react';

import './cart.css';

import ProductList from './cartProdList';
import Summary from './cartSummary' ;
  
  
  
  
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
            <div className="cart-checkout">
          <button type="button" className="cart-button">Check Out</button>
            </div>
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
  
  
  