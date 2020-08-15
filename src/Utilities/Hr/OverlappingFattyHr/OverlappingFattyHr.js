import React from "react";

import "./OverlappingFattyHr.css";

const OverlappingFattyHr = ({ top_hr_position, top_hr_width, top_hr_color, 
                                base_hr_color, top_hr_height }) => {
    const base_style = {
        color: base_hr_color,
        marginTop: 0,
        marginBottom: 0,
    }
    const top_style = {
        width: top_hr_width,
        background: top_hr_color,
        top: top_hr_position,
        position: "relative",
        height: top_hr_height,
        border: 0,
        marginTop: 0,
    };
    return(
        <div>
            <hr className="base_hr" style={base_style}/>
            <hr className="top_hr" style={top_style}/>
        </div>
    );
}

export default OverlappingFattyHr;