import React from 'react';

import './BrandPunchLine.css';

const BrandPunchLine = ({logo, description, textColor}) => {
    return (
        <div>
            <p className="center-align"><img alt="Logo" src={logo}/></p>
            <p className={textColor + " center-align"}>{description}</p>
        </div>
    );
}

export default BrandPunchLine;