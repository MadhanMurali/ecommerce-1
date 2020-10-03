import React from 'react';
import './product.css'
import { Redirect } from "react-router"
import { HOME } from '../../Globals/PathConstants';
const Product = (props) => {
    
    const { product } = props;
    

    return (
        
            <div  class="col l3 m6 s12 hoverable" onClick={() => <Redirect to={HOME} />}>

            <div  class="card shop-products">

            <div  class="card-image" >

            <img  src={product}  class="shop-product-img"/>

            <span><p><a  class="btn-floating halfway-fab waves-effect waves-light teal lighten-2">

            <i class="material-icons right">shopping_cart</i></a></p></span>

            </div>

            <div  class="card-action teal lighten-2 white-text">

            <p>

            <span>$35.00</span>

            <span  class="right">

            <i  class="ion-android-star"></i>

            <i  class="ion-android-star"></i>

            <i  class="ion-android-star"></i>

            <i  class="ion-android-star-outline"></i>

            <i  class="ion-android-star-outline"></i>

            <i  class="ion-android-star-outline"></i>

            </span>

            </p>

            </div>

            </div>

            </div>

            
    );
}

export default Product;