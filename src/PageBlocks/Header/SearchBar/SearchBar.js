import React from 'react';

import './SearchBar.css';

const SearchBar = ({color_class, icon_color_class}) => {
    return (
        <form>
            <div className={"search-bar-input-field input-field " + color_class}>
                <input id="search" className="search-bar-input" placeholder="Search" type="search" required/>
                <label className="label-icon search-bar-label" htmlFor="search">
                    <i className={"material-icons " + icon_color_class}>search</i>
                </label>
            </div>
        </form>
    );
}

export default SearchBar;