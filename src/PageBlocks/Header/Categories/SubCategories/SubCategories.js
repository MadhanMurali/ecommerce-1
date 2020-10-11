/**
 * Implementation of Categories and SubCategoies is Temporary and will change in future 
 */

 import React,{useEffect} from 'react';

 import M from 'materialize-css';

 import AnchorWithLi from '../../../../Utilities/Link/AnchorWithLi/AnchorWithLi';

 const grid = {
    1: "s12",
    2: "s6",
    3: "s4",
    4: "s3",
    6: "s2",
    12: "s1",
 };

 const Column = ({column_entry, column_spliting, total_column}) => {
    if (column_spliting) {
        return (
            <div className={"col " + grid[total_column] + " sub-categories-column"}>
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
        let dropdowns = document.querySelectorAll(".sub-categories-dropdown");

        let options = {
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
                                        title={sub_category.item_sub_category_name} href={""}
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
                <Column 
                    column_entry={sub_category} 
                    column_spliting={column_spliting} 
                    total_column={SubCategoiesList.length}
                />
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