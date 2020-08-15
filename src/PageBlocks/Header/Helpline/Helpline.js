import React from 'react';

import './Helpline.css';

const Helpline = ({helplineNumber, icon_color_class, title_color_class, number_color_class}) => {
    return (
        <div className="row">
            <div className="col s2 center-align">
                <i className={"material-icons header-helpline-icon " + icon_color_class}>headset_mic</i>
            </div>
            <div className="col s10">
                <p className={"header-helpline-paragraph " + title_color_class}>
                    <strong>Helpline</strong>
                    <br></br>
                    <a className={number_color_class} href={"tel:" + helplineNumber}>
                        <strong>{helplineNumber}</strong>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Helpline;