import React from 'react';
import { Link } from 'react-router-dom';

const AnchorButton  = ({icon_name, other_classes, title, data_target,
                                href, button_color_class, using_router}) => {
    const link = (using_router !== true)
                    ?   <a data-target={data_target} className={"btn waves-effect waves-light " + button_color_class + " " + other_classes} 
                            href={href} >
                            <i className="material-icons right">{icon_name}</i>{title}
                        </a>
                    :   <Link data-target={data_target} className={"btn waves-effect waves-light " + button_color_class + " " + other_classes} 
                            to={href} >
                            <i className="material-icons right">{icon_name}</i>{title}
                        </Link>
    return (
        <>
            {link}
        </>
    );
}

export default AnchorButton;