import React from 'react';

import './AccountLoadingScreen.css';

const AccountLoadingScreen = () => {
    return (
        <div className="account-loading-screen valign-wrapper">
            <div className="preloader-wrapper small active account-loading">
                <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
            <p className="center-align">Signing in...</p>
        </div>
    );
}

export default AccountLoadingScreen;