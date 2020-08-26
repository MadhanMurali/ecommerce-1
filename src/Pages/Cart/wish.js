
import React, { Component } from 'react';

import './cart.css';
import {  Link } from "react-router-dom";
function ProductList(props) {
      
    return (
      <div>
        <div class="centered wish-container">
          <div className="cart-products">
              <table >
            {props.products.map((product, index) => {
            return (
                <tbody key={index}>
                    <tr className="right-align cart-tr" >
                        <td><a href="#">
                                <img src={product.image} alt={product.name} />
                            </a></td>
                        <td>
                            <table className="cart-table">
                                <tbody >
                                        <tr><td className="cart-detail cart-name"><a href="#">{product.name}</a></td></tr>
                                        <tr><td className="cart-detail cart-name" ><a href="#">{formatCurrency(product.price)}</a></td></tr>
                                        
                                        <tr class="hide-on-med-and-down"> <button class="waves-effect waves-light btn green ">
                                            <i class="material-icons left" >add_shopping_cart</i>Add to Cart
                                            </button> &nbsp; &nbsp;
                                                <button class="waves-effect waves-light btn red">
                                                    <i class="material-icons left" onClick={props.onRemoveProduct.bind(this, index)}>delete</i>Remove
                                                </button>
                                         </tr>

                                         <tr class="hide-on-large-only"> <button class="btn-floating green ">
                                            <i class="material-icons left" >add_shopping_cart</i>Add to Cart
                                            </button> &nbsp; &nbsp;
                                                <button class="btn-floating red">
                                                    <i class="material-icons left" onClick={props.onRemoveProduct.bind(this, index)}>delete</i>Remove
                                                </button>
                                         </tr>
                                        

                                </tbody>


                            </table>

                        </td>




                    </tr>
                </tbody>

               
             );
            })}
        </table>
            
            </div>
            
        </div>
        
        <div className="wish-container right-align">
            <Link to="/cart" class="waves-effect waves-light btn ">
                <i class="material-icons right" >shopping_cart</i> Goto Cart</Link>
             </div>
    </div>
     );
  }
  
 export default class WishList extends React.Component {
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
    
                
              </div>
            ) : (
              <div className="cart-empty-product">
                <h3>There are no products in your wishlist.</h3>
                <button className="cart-button">Shop now</button>
                <div class="section"></div>
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
  
  
  
  