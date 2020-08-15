import React, {useState, useEffect} from 'react';

import M from 'materialize-css';

import './Categories.css'

import AnchorWithLi from '../../../Utilities/Link/AnchorWithLi/AnchorWithLi';
import SubCategoies from './SubCategories/SubCategories';

/**
 * Implementation of Categories and SubCategoies is Temporary and will change in future 
 */

const API = "http://localhost:3000/"

const Categories = ({categories}) => {

    const [subCategories, setSubCategories] = useState("");
    const [subCategoriesLoading, setSubCategoriesLoading] = useState(true);

    useEffect( () => {
        fetch(API + "sub-categories")
            .then(response => response.json())
            .then(json =>{
                setSubCategories(json);
                setSubCategoriesLoading(false);
                });
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
    }, [])

    const categoriesDesktop = categories.map(
        category => {
            return (
                <>
                    <AnchorWithLi
                        other_classes="dropdown-trigger"
                        key={category.id}
                        link_color_class={"white-text"}
                        title={category.name}
                        data_target={category.name}
                        icon_name="arrow_drop_down"
                    />
                    { (subCategoriesLoading !== true) && 
                        <SubCategoies 
                            category_name={category.name} 
                            sub_categoies={subCategories} 
                            totalEntriesPerColumn={3}
                        />
                    }
                </>
            )
        }
    );

    return (
        <>
            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">        
                    <ul className="left hide-on-med-and-down categories">
                        {categoriesDesktop}
                    </ul>
                </div>
                <div className="col s1"></div>
            </div>
        </>
    );
}

export default Categories;