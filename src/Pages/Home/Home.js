import React from 'react';
import SliderShow from '../../PageBlocks/slider/slider';
import HomeCarasoul from '../../PageBlocks/carasoul/home_carasoul';
import OfferSection from '../../PageBlocks/offer-section/offer-section';
import './Home.css'
const Home = () => {
    return (
        <div>
            <SliderShow />
            <div class="row">
                <div class="grid-example col s12 teal lighten-2"><span class="flow-text">Categories</span></div>
                {/* <div class="grid-example col s12 m6"><span class="flow-text">I am full-width on mobile (col s12 m6)</span></div> */}
            </div>
            <HomeCarasoul />
            <br></br>
            <div class="row">
                <div class="grid-example col s12 teal lighten-2"><span class="flow-text">Special Offers</span></div>
                {/* <div class="grid-example col s12 m6"><span class="flow-text">I am full-width on mobile (col s12 m6)</span></div> */}
            </div>
            <OfferSection />
        </div>
    );
}

export default Home;