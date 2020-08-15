/**
 * Implementation of Categories and SubCategoies is Temporary and will change in future 
 */

 import React,{useEffect} from 'react';

 import M from 'materialize-css';

 import AnchorWithLi from '../../../../Utilities/Link/AnchorWithLi/AnchorWithLi';

 const Column = ({column_entry, column_spliting}) => {
    if (column_spliting) {
        return (
            <div className="col s6 sub-categories-column">
                {column_entry}
            </div>
        );
    }
    return (
        <div className="col s12">
            {column_entry}
        </div>
    );
 }

 const SubCategoies = ({sub_categoies, category_name, totalEntriesPerColumn}) => {

    useEffect( () => {
        const dropdowns = document.querySelectorAll(".dropdown-trigger");

        const options = {
            constrainWidth: false,
            coverTrigger: false,
            closeOnClick: true,
            inDuration: 0,
            outDuration: 0,
            hover: true,
        }

        M.Dropdown.init(dropdowns, options);
    }, []);
    
    const sub_categoiesLength = sub_categoies.length;

    let SubCategoiesList = [];

    for (let index=0; index < sub_categoiesLength; index+=totalEntriesPerColumn) {
        SubCategoiesList.push(
            sub_categoies
                .slice(index, index+totalEntriesPerColumn)
                .map(
                    sub_category => <AnchorWithLi 
                                        key={sub_category.id}
                                        link_color_class={"black-text"}
                                        title={sub_category.name} href={""}
                                    />
                )
        );
    }

    let column_spliting = true;

    if (totalEntriesPerColumn === sub_categoiesLength) {
        column_spliting = false;
    }

    const list = SubCategoiesList.map( 
        (sub_category) => {
            return (
                <Column column_entry={sub_category} column_spliting={column_spliting}/>
            )
        }                        
    )

    return (
        <ul id={category_name} className='dropdown-content'>
            <div className="sub-categories-row ">
                {list}
            </div>
        </ul>
    );
 }

 export default SubCategoies;