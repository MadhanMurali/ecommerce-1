import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import M from 'materialize-css';

import './CollapsibleListWithLinks.css'

const Item = ({content, content_color,href,item_bullet_style, using_router}) => {
    const paragraph_style = {
        margin: "0",
    };

    const link = (using_router !== true)
                ? <a href={href} className={content_color}><strong>{content}</strong></a>
                : <Link to={href} className={content_color}><strong>{content}</strong></Link>

    return (
        <div className="row hoverable">
            <div className="col s1">
                <i className="material-icons">{item_bullet_style}</i>
            </div>
            <div className="col s10">
                <p style={paragraph_style}>{ link }</p>
            </div>            
        </div>
    );
}

const CollapsibleListWithLinks = ({
    list, content_color, heading_bullet_style, item_bullet_style, heading, using_router, field_name }) => {

    useEffect( () => {
        let collapsible = document.querySelectorAll('.collapsible');
        let options = {
            inDuration: 40,
            outDuration: 40,
        }
        M.Collapsible.init(collapsible, options);
    }, [])

    const linkList = list.map((item) => {
        return (
            <Item 
                content = {field_name? item[field_name] : item.name} 
                content_color = {content_color}
                href = {item.link}
                item_bullet_style = {item_bullet_style} 
                key={item.id}
                using_router={using_router}
            />
        );
    });
    return (
        <div>
            <ul className="collapsible popout">
                <li>
                    <div className="collapsible-header black-text">
                        <p className="">
                            <i className="material-icons left">{heading_bullet_style}</i>{heading}
                        </p>
                    </div>
                    <div className="collapsible-body">
                        {linkList}
                    </div>
                </li>
            </ul>            
        </div>
    );
}

export default CollapsibleListWithLinks;