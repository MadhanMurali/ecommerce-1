import React, {useEffect, useState} from 'react';
import SuperNormalListWithLinks from '../../../Utilities/List/SuperNormalListWithLinks/SuperNormalListWithLinks';
import CollapsibleListWithLinks from '../../../Utilities/List/CollapsibleListWithLinks/CollapsibleListWithLinks';

const API = "http://localhost:3000/";

const Links = ({slug, list_bullet_style, heading_bullet_style,
                heading, content_color, heading_color_class,
                top_hr_color, base_hr_color, using_router}) => {

    const [links, setLinks] = useState(0);

    const [linksLoading, setLinksLoding] = useState(true);

    useEffect(() => {
        fetch(API + slug)
            .then(response => response.json())
            .then(json => {
                setLinks(json);
                setLinksLoding(false);
            })
    }, [slug]);

    return(
        <>
            { (linksLoading !== true) && 
                <>
                <div className="hide-on-small-only">
                    <SuperNormalListWithLinks 
                        list={links} 
                        bullet_style={list_bullet_style}
                        heading={heading}
                        heading_color_class={heading_color_class}
                        content_color={content_color}
                        top_hr_color={top_hr_color}
                        top_hr_width="73%"
                        base_hr_color={base_hr_color}
                        using_router={using_router}
                    />
                </div>
                <div className="hide-on-med-and-up">
                    <CollapsibleListWithLinks
                        list={links}
                        item_bullet_style={list_bullet_style}
                        heading={heading}
                        heading_color_class={heading_color_class}
                        heading_bullet_style={heading_bullet_style}
                        content_color={content_color}
                        using_router={using_router}
                    />
                </div>
                </>
            }
        </>
    );
}

export default Links;