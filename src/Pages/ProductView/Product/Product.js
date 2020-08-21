import React, { useEffect } from 'react';

import M from 'materialize-css';

import './Product.css';

const Product = () => {

    useEffect( () => {

        const options = {
            dropdownOptions: {
                hover: false,
            },
        };

        let variantElem = document.getElementById('variant-select');
        let quantityElem = document.getElementById('quantity-select');

        let variantInstance = M.FormSelect.init(variantElem, options);
        let quantityInstance = M.FormSelect.init(quantityElem, options);
    }, []);

    return (
        <div className = "row card-panel">
            <div className="card-panel col s12 m12 l6">
                photo   
            </div>
            <div className="card-panel col s12 m12 l6">
                <div className="row">
                    <div className="col s12">
                        <div className="col s12">
                            <p><span className="product-pricing red-text text-lighten-2">Rs. 2000</span></p>
                        </div>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12 m6 l6">
                                    <i className="material-icons prefix">view_carousel</i>
                                    <select defaultValue="Variant Not Selected" id="variant-select">
                                        <option value="Variant Not Selected" disabled>Variant</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                                <div className="col s12 m6 l6 input-field">
                                    <i className="material-icons prefix">view_week</i>
                                    <input id="quantity" type="number" min={1}/>
                                    <label htmlFor="quantity">Quantity</label>
                                </div>
                            </div>
                            <div className="input-field col s12 m6 l6 center-align">
                                <button className="btn waves-effect waves-light teal darken-3 wishlist-btn">
                                    <i className="material-icons">favorite_border</i>
                                    Add to Whishlist
                                </button>
                            </div>
                            <div className="input-field col s12 m6 l6 center-align">
                                <button className="btn waves-effect waves-light teal darken-3 cart-btn">
                                    <i className="material-icons">shopping_cart</i>
                                    Add to Cart
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;