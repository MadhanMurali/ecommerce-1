import React from 'react';
import './product.css'
import { Redirect } from "react-router"
import { HOME } from '../../Globals/PathConstants';
const Product = (props) => {
    
    const { product } = props;
    

    return (
        
            <div  className="col l3 m6 s12 hoverable" onClick={() => <Redirect to={HOME} />}>

            <div  className="card shop-products">

            <div  className="card-image" >

            <img  src={product}  className="shop-product-img"/>

            <span><p><a  className="btn-floating halfway-fab waves-effect waves-light teal lighten-2">

            <i className="material-icons right">shopping_cart</i></a></p></span>

            </div>

            <div  className="card-action teal lighten-2 white-text">

            <p>

            <span>$35.00</span>

            <span  className="right">

            <i  className="ion-android-star"></i>

            <i  className="ion-android-star"></i>

            <i  className="ion-android-star"></i>

            <i  className="ion-android-star-outline"></i>

            <i  className="ion-android-star-outline"></i>

            <i  className="ion-android-star-outline"></i>

            </span>

            </p>

            </div>

            </div>

            </div>

            
    );
}

export default Product;