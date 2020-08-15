import React from 'react';
import { Link } from 'react-router-dom';

const AnchorWithLi = ({icon_name, link_color_class, other_classes, title, href, data_target, using_router}) => {

    const link = (using_router !== true)
                    ?   <a href={href} data-target={data_target} className={ link_color_class + " " + other_classes }>
                            <i className="material-icons right">{icon_name}</i>{title}
                        </a>
                    :   <Link to={href} data-target={data_target} className={ link_color_class + " " + other_classes }>
                            <i className="material-icons right">{icon_name}</i>{title}
                        </Link>

    return (
        <li>
           {link}
        </li>
    );
}

export default AnchorWithLi;