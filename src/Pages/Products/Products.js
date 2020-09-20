import React from 'react';
import Product from '../../PageBlocks/product/product';
import './Products.css'
import ProductImage from '../../assets/img/product/ProductSample.jpg';
const product_list = [ProductImage, ProductImage, ProductImage, ProductImage];

const Products = () => {
    return (
        <div className='container'>
        <div className='row'>
        {product_list.map((each, index) => (
          <Product key={index}  product={each} />
        ))}
        </div>
        </div>
    );
}

export default Products;