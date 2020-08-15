import React from "react";
import { Link } from 'react-router-dom';

import './SuperNormalListWithLinks.css'

import OverlappingFattyHr from '../../Hr/OverlappingFattyHr/OverlappingFattyHr';

const Item = ({content, href,bullet_style, content_color, using_router}) => {
    const paragraph_style = {
        margin: "0",
    };

    const link = (using_router !== true)
                ? <a href={href} className={content_color}><strong>{content}</strong></a>
                : <Link to={href} className={content_color}><strong>{content}</strong></Link>
    return (
        <div className="row">
            <div className="col s1"></div>
            <div className="col s10">
                <div className="row hoverable" id="inner-row">
                    <div className="col s1">
                        <i className="material-icons">{bullet_style}</i>
                    </div>
                    <div className="col s10 center-align">
                        <p style={paragraph_style}>{link}</p>
                    </div>     
                </div>   
            </div>
            <div className="col s1"></div>    
        </div>
    );
}

const SuperNormalListWithLinks = ({list, bullet_style, content_color, 
                                    heading, heading_color_class, 
                                    base_hr_color,
                                    top_hr_color, top_hr_width, using_router}) => {
    const linkList = list.map((item) => {
        return (
            <Item 
                content = {item.name} 
                content_color = {content_color}
                href = {item.link}
                bullet_style = {bullet_style} 
                key={item.id}
                using_router={using_router}
            />
        );
    });
    return (
        <div>
            <h4 className={"center-align "+heading_color_class}>{heading}</h4>
            <OverlappingFattyHr 
                base_hr_color={base_hr_color}
                top_hr_position="-3px"
                top_hr_width={top_hr_width}
                top_hr_color={top_hr_color}
                top_hr_height="5px"
            />
            {linkList}
        </div>
    );
}

export default SuperNormalListWithLinks;