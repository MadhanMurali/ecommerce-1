import React from 'react';

import './SuperSimpleLoadingScreen.css';

const SuperSimpleLoadingScreen = () => {
    return (
        // <div className="super-simple-loading-screen valign-wrapper">
        //     <h4 className="super-simple-loading">Loading...</h4>
        // </div>
        <div className="super-simple-loading-screen valign-wrapper">
        <div className="preloader-wrapper small active super-simple-loading">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default SuperSimpleLoadingScreen;