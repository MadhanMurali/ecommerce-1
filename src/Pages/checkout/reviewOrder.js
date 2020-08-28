import React, { Component } from 'react';
import Summary from'../Cart/cartSummary';
import ProductList from'../Cart/cartProdList';
import './checkout.css';



export default class ReviewOrder extends Component {
    
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
                <div className="row">
                    <div className="col s12 m12 l6">
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
              <h3>There are no products in your cart.</h3>
            </div>
          )}
                    </div>
                    <div className="col s12 m12 l6">
                    {/* <label htmlFor="promo-code" className="cart-label">Have a Promo Code?</label>
                     <input type="text" className="cart-input" onChange={props.onEnterPromoCode} />
                        <button type="button" className="cart-button"onClick={props.checkPromoCode} /> */}
                    <Summary
                            products={products}
                            discount={this.state.discount}
                            tax={this.state.tax}
                            onEnterPromoCode={this.onEnterPromoCode}
                            checkPromoCode={this.checkPromoCode}
                        />
                        <form class="col s12" method="post"  onSubmit={this.handleSubmit}>
                        
                            <div class="row center-align">
                                <button type='submit' name='btn_login' class=' btn btn-large waves-effect indigo center-align'>Place Order</button>
                            </div>
                        </form>
                    </div>

                </div>
                    
            </div>
            
    );



}

}