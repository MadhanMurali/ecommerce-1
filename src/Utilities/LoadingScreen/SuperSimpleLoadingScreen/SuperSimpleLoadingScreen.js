import React from 'react';

import './SuperSimpleLoadingScreen.css';

const SuperSimpleLoadingScreen = () => {
    return (
        // <div className="super-simple-loading-screen valign-wrapper">
        //     <h4 className="super-simple-loading">Loading...</h4>
        // </div>
        <div className="super-simple-loading-screen valign-wrapper">
        <div class="preloader-wrapper small active super-simple-loading">
        <div class="spinner-layer spinner-green-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default SuperSimpleLoadingScreen;