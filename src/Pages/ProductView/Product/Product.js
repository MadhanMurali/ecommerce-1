import React, { useEffect, useState } from 'react';

import M from 'materialize-css';

import './Product.css';
import ProductImage from '../../../assets/img/product/ProductSample.jpg';
import ProductImage2 from '../../../assets/img/product/ProductSample2.jpg';
import ProductImage3 from '../../../assets/img/product/ProductSample3.jpg';
import ProductImage4 from '../../../assets/img/product/ProductSample4.jpg';
import ProductImage5 from '../../../assets/img/product/ProductSample5.jpg';
import ProductImage6 from '../../../assets/img/product/ProductSample6.jpg';
import ProductImage7 from '../../../assets/img/product/ProductSample7.jpg';
import ProductImage8 from '../../../assets/img/product/ProductSample8.jpg';

const slideDown = (event, productIconCount, currentProductIconCount, setCurrentProductIconCount) => {
    event.preventDefault();
    
    //3 : offset to display icons, 72: height of icon (68) and margin (4)
    // to move 2 icons within single click, change 3 to 2 and 72 (from second) to 144
    const maxTranslateY = (productIconCount - 3) * 72;
    const currentTranslateY = (currentProductIconCount - 1) * 72;
    if (maxTranslateY === currentTranslateY) {
        return;
    }
    for (let i = 0; i < productIconCount; i++) {
        let productCollectionDiv = document.getElementsByClassName("product-photo-collection-icon-div")[i];
        productCollectionDiv.style.transform = "translateY(-"+ (currentTranslateY + 72) +"px)";
    }
    setCurrentProductIconCount(currentProductIconCount+1);
}

const slideUp = (event, productIconCount, currentProductIconCount, setCurrentProductIconCount) => {
    event.preventDefault();

    const currentTranslateY = (currentProductIconCount - 1) * 72;
    if (0 === currentTranslateY) {
        return;
    }
    for (let i = 0; i < productIconCount; i++) {
        let productCollectionDiv = document.getElementsByClassName("product-photo-collection-icon-div")[i];
        productCollectionDiv.style.transform = "translateY("+ (72 - currentTranslateY) +"px)";

    }
    setCurrentProductIconCount(currentProductIconCount-1);
}

const moveToProductImage = (event, productCarouselInstance, target, setProductZoomed) => {
    event.preventDefault();
    productCarouselInstance.set(target);
    setProductZoomed(target);
}

const showProductZoomedImage = (event) => {
    let checkSmallAndMediumScreen = window.matchMedia("only screen and (max-width: 992px)");

    if ( checkSmallAndMediumScreen.matches ) {
        return;
    }
    let productZoomedImage = document.getElementsByClassName("product-photo-zoomed-div")[0];

    productZoomedImage.style.display = "block";
}

const hideProductZoomedImage = (event) => {
    let checkSmallAndMediumScreen = window.matchMedia("only screen and (max-width: 992px)");

    if ( checkSmallAndMediumScreen.matches ) {
        return;
    }
    let productZoomedImage = document.getElementsByClassName("product-photo-zoomed-div")[0];

    productZoomedImage.style.display = "none";
}

const panZoomedImage = ( event ) => {

    let checkSmallAndMediumScreen = window.matchMedia("only screen and (max-width: 992px)");

    if ( checkSmallAndMediumScreen.matches ) {
        return;
    }

    let rect = event.target.getBoundingClientRect();
    let x = parseInt(event.clientX - rect.x);
    let y = parseInt(event.clientY - rect.y);

    let productZoomedImage = document.getElementsByClassName("product-photo-zoomed")[0];

    if ( x>=0 && x <= 45 && y >= 0 && y <= 40.47875) // top left corner
        return;

    if ( x>=0 && x <= 45 && y <= 323.833 && y >= 256) // bottom left corner
        return;

    if ( x>=225 && x <= 270 && y >= 0 && y <= 40.47875) // top right corner
        return;

    if ( x>=225 && x <= 270 && y <= 323.833 && y >= 256) // bottom right corner
        return;

    if ( x>45 && x < 225 && y >= 0 && y <= 40.47875) // top center corner
    {
        productZoomedImage.style.transform = "translate(" + (270 - (-45 + x) * 3) + "px," 
                                            + ( 323.833 ) + "px) scale( 3, 3)";
        return;
    }

    if ( x>45 && x < 225 && y <= 323.833 && y >= 256 ) // bottom center corner
    {
        productZoomedImage.style.transform = "translate(" + (270 - (-45 + x) * 3) + "px," 
                                            + ( 323.833 - (-40.47875 + 256) * 3) + "px) scale( 3, 3)";
        return;
    }

    if ( x<=45 && x >= 0 && y < 256 && y > 40.47875 ) // left center corner
    {
        productZoomedImage.style.transform = "translate(" + (270) + "px," 
                                            + ( 323.833 - (-40.47875 + y) * 3) + "px) scale( 3, 3)";
        return;
    }

    if ( x<=270 && x >= 225 && y < 256 && y > 40.47875 ) // right center corner
    {
        productZoomedImage.style.transform = "translate(" + (270 - (-45 + 225) * 3) + "px," 
                                            + ( 323.833 - (-40.47875 + y) * 3) + "px) scale( 3, 3)";
        return;
    }

    productZoomedImage.style.transform = "translate(" + (270 - (-45 + x) * 3) + "px," 
                                        + ( 323.833 - (-40.47875 + y) * 3) + "px) scale( 3, 3)";
}

const Product = () => {

    const productImageArray = [
        ProductImage, ProductImage2, ProductImage3,
        ProductImage4, ProductImage5, ProductImage6,
        ProductImage7, ProductImage8
    ]

    const [productIconCount, setProductIconCount] = useState(0);
    const [currentProductIconCount, setCurrentProductIconCount] = useState(0);
    const [productCarouselInstance, setProductCarouselInstance] = useState(0);
    const [productZoomed, setProductZoomed] = useState(0);

    useEffect( () => {

        setProductIconCount(8);
        setCurrentProductIconCount(1);

        const variantOptions = {
            dropdownOptions: {
                hover: false,
            },
        };

        const productCarouselOptions = {
            fullWidth: true,
            indicators: true,
            duration: 100,
        };

        const variantElem = document.getElementById('variant-select');
        const quantityElem = document.getElementById('quantity-select');
        const productCarouselElem = document.getElementById('product-carousel');

        const productCarouselInstance = M.Carousel.init(productCarouselElem, productCarouselOptions);
        setProductCarouselInstance(productCarouselInstance);
        const variantInstance = M.FormSelect.init(variantElem, variantOptions);
        const quantityInstance = M.FormSelect.init(quantityElem);

        // Remove event listeners added by Materialize for corousel
        productCarouselElem.removeEventListener('mousedown', productCarouselInstance._handleCarouselTapBound);
        productCarouselElem.removeEventListener('mousemove', productCarouselInstance._handleCarouselDragBound);
        productCarouselElem.removeEventListener('mouseup', productCarouselInstance._handleCarouselReleaseBound);
        productCarouselElem.removeEventListener('mouseleave', productCarouselInstance._handleCarouselReleaseBound);
        productCarouselElem.removeEventListener('click', productCarouselInstance._handleCarouselClickBound);
    }, []);

    return (
        <div className = "row card-panel">
            <div className="row">
                <div className="col s12 m12 l1"></div>
                <div className="col s12 m12 l10">
                    <h6>Product Name is Lorem Ipsum</h6>
                </div>
                <div className="col s12 m12 l1"></div>
            </div>
            <div className="col s12 m12 l6 valign-wrapper">
                <div className="col s12 m3 l3 card-panel hide-on-small-only">

                    <div className="z-depth-1 product-photo-collection-prev-btn-div">
                        <a className="product-photo-collection-prev-btn" href="#!" onClick={e => slideUp(e, productIconCount, currentProductIconCount, setCurrentProductIconCount)}>
                            <p className="product-photo-collection-prev-para">
                                <i className="material-icons">expand_less</i>
                            </p>
                        </a>
                    </div>
                    
                    <div className="product-photo-collection">                        
                        <div className="z-depth-1 product-photo-collection-icon-div">
                            <a className="product-photo-collection-icon" href="#!"
                                onClick={ e => moveToProductImage(e, productCarouselInstance, 0, setProductZoomed)} >
                                <img src={ProductImage} alt="product"></img>
                            </a>
                        </div>
                        <div className="z-depth-1 product-photo-collection-icon-div">
                            <a className="product-photo-collection-icon" href="#!"
                                onClick={ e => moveToProductImage(e, productCarouselInstance, 1, setProductZoomed)} >
                                <img src={ProductImage2} alt="product"></img>
                            </a>
                        </div>
                        <div className="z-depth-1 product-photo-collection-icon-div">
                            <a className="product-photo-collection-icon" href="#!"
                                onClick={ e => moveToProductImage(e, productCarouselInstance, 2, setProductZoomed)} >
                                <img src={ProductImage3} alt="product"></img>
                            </a>
                        </div>
                        <div className="z-depth-1 product-photo-collection-icon-div">
                            <a className="product-photo-collection-icon" href="#!"
                                onClick={ e => moveToProductImage(e, productCarouselInstance, 3, setProductZoomed)} >
                                <img src={ProductImage4} alt="product"></img>
                            </a>
                        </div>
                        <div className="z-depth-1 product-photo-collection-icon-div">
                            <a className="product-photo-collection-icon" href="#!"
                                onClick={ e => moveToProductImage(e, productCarouselInstance, 4, setProductZoomed)} >
                                <img src={ProductImage5} alt="product"></img>
                            </a>
                        </div>
                        <div className="z-depth-1 product-photo-collection-icon-div">
                            <a className="product-photo-collection-icon" href="#!"
                                onClick={ e => moveToProductImage(e, productCarouselInstance, 5, setProductZoomed)} >
                                <img src={ProductImage6} alt="product"></img>
                            </a>
                        </div>
                        <div className="z-depth-1 product-photo-collection-icon-div">
                            <a className="product-photo-collection-icon" href="#!"
                                onClick={ e => moveToProductImage(e, productCarouselInstance, 6, setProductZoomed)} >
                                <img src={ProductImage7} alt="product"></img>
                            </a>
                        </div>
                        <div className="z-depth-1 product-photo-collection-icon-div">
                            <a className="product-photo-collection-icon" href="#!"
                                onClick={ e => moveToProductImage(e, productCarouselInstance, 7, setProductZoomed)} >
                                <img src={ProductImage8} alt="product"></img>
                            </a>
                        </div>
                    </div>

                    <div className="z-depth-1 product-photo-collection-next-btn-div">
                        <a className="product-photo-collection-next-btn" href="#!" onClick={e => slideDown(e, productIconCount, currentProductIconCount, setCurrentProductIconCount)}>
                            <p className="product-photo-collection-next-para">
                                <i className="material-icons">expand_more</i>
                            </p>
                        </a>                        
                    </div>
                    
                </div>

                <div className="col s12 m6 l6">
                    <div className="product-photo-focussed-background">
                        <div id="product-carousel" className="z-depth-3 carousel carousel-slider center product-photo-focussed">
                            <a className="carousel-item">
                                <img src={ProductImage} alt="product" onMouseMove={ e => panZoomedImage( e ) } onMouseOver={showProductZoomedImage} onMouseOut={hideProductZoomedImage}></img>
                            </a>
                            <a className="carousel-item">
                                <img src={ProductImage2} alt="product" onMouseMove={ e => panZoomedImage( e ) } onMouseOver={showProductZoomedImage} onMouseOut={hideProductZoomedImage}></img>
                            </a>
                            <a className="carousel-item" >
                                <img src={ProductImage3} alt="product" onMouseMove={ e => panZoomedImage( e ) } onMouseOver={showProductZoomedImage} onMouseOut={hideProductZoomedImage}></img>
                            </a>
                            <a className="carousel-item" >
                                <img src={ProductImage4} alt="product" onMouseMove={ e => panZoomedImage( e ) } onMouseOver={showProductZoomedImage} onMouseOut={hideProductZoomedImage}></img>
                            </a>
                            <a className="carousel-item" >
                                <img src={ProductImage5} alt="product" onMouseMove={ e => panZoomedImage( e ) } onMouseOver={showProductZoomedImage} onMouseOut={hideProductZoomedImage}></img>
                            </a>
                            <a className="carousel-item" >
                                <img src={ProductImage6} alt="product" onMouseMove={ e => panZoomedImage( e ) } onMouseOver={showProductZoomedImage} onMouseOut={hideProductZoomedImage}></img>
                            </a>
                            <a className="carousel-item" >
                                <img src={ProductImage7} alt="product" onMouseMove={ e => panZoomedImage( e ) } onMouseOver={showProductZoomedImage} onMouseOut={hideProductZoomedImage}></img>
                            </a>
                            <a className="carousel-item" >
                                <img src={ProductImage8} alt="product" onMouseMove={ e => panZoomedImage( e ) } onMouseOver={showProductZoomedImage} onMouseOut={hideProductZoomedImage}></img>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col s3 m3 l3">

                    <div className="product-photo-zoomed-div red z-depth-5">
                        <img src={productImageArray[productZoomed]} className="product-photo-zoomed" alt="product"></img>
                    </div>

                </div>

                {/** small screen product icons -- incomplete and it may not be required for small screens */}

                {/* <div className="col s12 m3 l3 hide-on-med-and-up">
                    <div className="valign-wrapper">
                        <p className="center-align product-photo-collection-prev-para-small-screen">
                            <a className="" href="#!" onClick={e => slideUp(e, productIconCount, currentProductIconCount, setCurrentProductIconCount)}>
                                <i className="material-icons">chevron_left</i>
                            </a>
                        </p>
                        <div className="product-photo-collection-small-screen-column ">
                            <div className="product-photo-collection-small-screen-div">
                                <a className="product-photo-collection-icon-small-screen" href="#!"
                                    onClick={ e => moveToProductImage(e, productCarouselInstance, 0)} >
                                    <img src={ProductImage} alt="product"></img>
                                </a>
                                <a className="product-photo-collection-icon-small-screen" href="#!"
                                    onClick={ e => moveToProductImage(e, productCarouselInstance, 1)} >
                                    <img src={ProductImage2} alt="product"></img>
                                </a>
                                <a className="product-photo-collection-icon-small-screen" href="#!"
                                    onClick={ e => moveToProductImage(e, productCarouselInstance, 2)} >
                                    <img src={ProductImage3} alt="product"></img>
                                </a>
                                <a className="product-photo-collection-icon-small-screen" href="#!"
                                    onClick={ e => moveToProductImage(e, productCarouselInstance, 3)} >
                                    <img src={ProductImage4} alt="product"></img>
                                </a>
                                <a className="product-photo-collection-icon-small-screen" href="#!"
                                    onClick={ e => moveToProductImage(e, productCarouselInstance, 4)} >
                                    <img src={ProductImage5} alt="product"></img>
                                </a>
                                <a className="product-photo-collection-icon-small-screen" href="#!"
                                    onClick={ e => moveToProductImage(e, productCarouselInstance, 5)} >
                                    <img src={ProductImage6} alt="product"></img>
                                </a>
                                <a className="product-photo-collection-icon-small-screen" href="#!"
                                    onClick={ e => moveToProductImage(e, productCarouselInstance, 6)} >
                                    <img src={ProductImage7} alt="product"></img>
                                </a>
                                <a className="product-photo-collection-icon-small-screen" href="#!"
                                    onClick={ e => moveToProductImage(e, productCarouselInstance, 7)} >
                                    <img src={ProductImage8} alt="product"></img>
                                </a>
                            </div>
                        </div>
                        
                        <p className="center-align product-photo-collection-next-para-small-screen">
                            <a href="#!" onClick={e => slideDown(e, productIconCount, currentProductIconCount, setCurrentProductIconCount)}>
                                <i className="material-icons">chevron_right</i>
                            </a>
                        </p>
                    </div>

                </div> */}


            </div>
            
            <div className="col s12 m12 l6">
                <div className="row">
                        <div className="col s12">
                            <p className="product-pricing red-text text-lighten-2">Rs. 2000</p>
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
    );
}

export default Product;