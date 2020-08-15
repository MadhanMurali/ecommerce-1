import React from "react";

import './SuperNormalList.css'

const Item = ({item, bullet_style}) => {
    const paragraph_style = {
        margin: "0",
    };
    return (
        <div  className="row valign-wrapper">
            <div className="col s1">
                <i className="material-icons">{bullet_style}</i>
            </div>
            <div className="col s11">
                <p style={paragraph_style}>{item}</p>
            </div>
            
        </div>
    );
}

const SuperNormalList = ({list, bullet_style}) => {
    const items = Object.entries(list).map((item, index, arr) => {
        return (
            <Item 
                item = {item[1]} 
                bullet_style = {bullet_style} 
                key={item[0]}
            />
        );
    });
    return (
        <div>
            {items}
        </div>
    );
}

export default SuperNormalList;