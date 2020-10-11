import React, {useState, useEffect} from 'react';

import M from 'materialize-css';

import './CategoriesResponsive.css'

import CollapsibleListWithLinks from '../../../../Utilities/List/CollapsibleListWithLinks/CollapsibleListWithLinks';

/**
 * Implementation of Categories and SubCategoies is Temporary and will change in future 
 */

const API = "http://localhost:3000/"

const CategoriesResponsive = ({categories}) => {

    useEffect( () => {
        let elems = document.querySelectorAll('.modal');
        let options = {
            inDuration: 100,
            outDuration: 100,
        };
        M.Modal.init(elems, options);
    }, [])

    const categoriesResponsive = categories.getCategory.map(
        category => {
            return (
                <>
                    <CollapsibleListWithLinks
                        list={category.itemSubCategory}
                        item_bullet_style={"bubble_chart"}
                        heading={category.item_category_name}
                        heading_color_class={"black-text"}
                        heading_bullet_style={""}
                        content_color={"black-text"}
                        using_router={false}
                        field_name={"item_sub_category_name"}
                    />
                </>
            )
        }
    )

    return (
        <>
            <div id="categories-modal" className="modal modal-fixed-footer">
                <div className="modal-content">
                    {categoriesResponsive}
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        </>
    );
}

export default CategoriesResponsive;