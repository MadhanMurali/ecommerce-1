import React from 'react';
import { Link } from 'react-router-dom';

const AnchorButtonWithLi = ({icon_name, other_classes, title, data_target,
                                href, button_color_class, using_router, onClick}) => {
    const link = (using_router !== true)
                    ?   <a onClick={onClick} data-target={data_target} className={"btn waves-effect waves-light " + button_color_class + " " + other_classes} 
                            href={href} >
                            <i className="material-icons right">{icon_name}</i>{title}
                        </a>
                    :   <Link onClick={onClick} data-target={data_target} className={"btn waves-effect waves-light " + button_color_class + " " + other_classes} 
                            to={href} >
                            <i className="material-icons right">{icon_name}</i>{title}
                        </Link>
    return (
        <li>
            {link}
        </li>
    );
}

export default AnchorButtonWithLi;