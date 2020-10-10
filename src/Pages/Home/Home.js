import React from 'react';
import SliderShow from '../../PageBlocks/slider/slider';
import HomeCarasoul from '../../PageBlocks/carasoul/home_carasoul';
import OfferSection from '../../PageBlocks/offer-section/offer-section';
import './Home.css'
const Home = () => {
    return (
        <div>
            <SliderShow />
            <div className="row">
                <div className="grid-example col s12 teal lighten-2"><span className="flow-text">Categories</span></div>
                {/* <div className="grid-example col s12 m6"><span className="flow-text">I am full-width on mobile (col s12 m6)</span></div> */}
            </div>
            <HomeCarasoul />
            <br></br>
            <div className="row">
                <div className="grid-example col s12 teal lighten-2"><span className="flow-text">Special Offers</span></div>
                {/* <div className="grid-example col s12 m6"><span className="flow-text">I am full-width on mobile (col s12 m6)</span></div> */}
            </div>
            <OfferSection />
        </div>
    );
}

export default Home;