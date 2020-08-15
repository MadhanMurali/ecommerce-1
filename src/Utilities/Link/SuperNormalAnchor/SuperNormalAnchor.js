import React from 'react';
import { Link } from 'react-router-dom';

const SuperNormalAnchor = ({icon_name, link_color_class, other_classes, data_target, title, href, using_router}) => {

    const link = (using_router !== true)
        ?   <a href={href} className={ link_color_class + " " + other_classes } data-target={data_target}>
                <i className="material-icons right">{icon_name}</i>{title}
            </a>
        :   <Link to={href} className={ link_color_class + " " + other_classes } data-target={data_target}>
                <i className="material-icons right">{icon_name}</i>{title}
            </Link>

    return (
        <>
            {link}
        </>
    );
}

export default SuperNormalAnchor;