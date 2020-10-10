import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import SearchBar from "material-ui-search-bar";
import './Header.css'

import Logo from '../../assets/img/header/header-logo-white.png';

// import SearchBar from './SearchBar/SearchBar';
import SmallScreenSideMenu from './SmallScreenSideMenu/SmallScreenSideMenu';
// import SmallScreenModal from './SmallScreenModal/SmallScreenModal';
import LargeScreenList from './LargeScreenList/LargeScreenList';
import Helpline from './Helpline/Helpline';
import Categories from './Categories/Categories';

import AnchorButton from '../../Utilities/Link/AnchorButton/AnchorButton';
import CategoriesResponsive from './Categories/CategoriesResponsive/CategoriesResponsive';
import Prescription from './prescription/prescription';
import { HOME } from '../../Globals/PathConstants';
import { CategoriesContext } from '../../Globals/Config';


const API = "http://localhost:3000/"

const Header = () => {

    const [prescriptionLoading, setPrescriptionLoading] = useState(true);

    const [value, setValue] = useState("");

    const categories = useContext(CategoriesContext);
  
    const search_products = (search) => {
        console.log("searching products", search);
    }
    
    return (
        <header className="">
            <nav className="nav-extended teal lighten-2">
                <div className="nav-wrapper">

                    <Link to={HOME} className="brand-logo header-logo left">
                        <img src={Logo} alt="Logo" className="header-logo-img"></img>
                    </Link>

                    <LargeScreenList button_color_class="teal darken-3"/>

                    <SmallScreenSideMenu 
                        menu_button_color_class="teal darken-3" 
                        title_color_class="white-text" 
                        icon_color_class="white-text"
                        options_button_color_class="teal darken-3"
                    />

                    {/* <SmallScreenModal menu_button_color_class="teal darken-3" link_color_class="black-text"/> */}

                </div>

                <div className="nav-wrapper">
                    <div className="row search-bar-nav">
                        <div className="col s12 m12 l4 hide-on-med-and-down">
                            <Helpline 
                                helplineNumber="+91 90 3456 7890"
                                icon_color_class="black-text"
                                number_color_class="red-text accent-3"
                                title_color_class="white-text"
                            />
                        </div>
                        <div className="col s12 m12 l4">
                            {/* <SearchBar color_class="white" icon_color_class="purple-text"/> */}
                            <SearchBar
                                value={value}
                                placeholder={"Search Medicines"}
                                onChange={(newValue) => {setValue( newValue )}}
                                onRequestSearch={() => search_products(value)}
                            />
                        </div>
                        <div className="col s12 m6 l4 prescription" style={{'textAlign':'center'}}>


                            <AnchorButton
                                icon_name="cloud_upload" 
                                title="Upload Prescription" 
                                other_classes="waves-effect waves-light  text-white-3 modal-trigger"
                                href="#prescription-modal"
                                using_router={false}
                            />
                            {/* <a class="waves-effect waves-light btn-medium"><i class="material-icons right">cloud_upload</i>Upload</a> */}

        
                        </div>
                    </div>
                </div>

                <div className="nav-content categories-nav">
                    <Categories categories={categories}/>
                </div>                
            </nav>

            <div className="hide-on-large-only center-align categories-tab-mobile">
                <AnchorButton
                    icon_name="emoji_people" 
                    title="Our Categories - Your Freedom" 
                    other_classes="btn-flat grey-text text-darken-3 modal-trigger"
                    href="#categories-modal"
                    using_router={false}
                />
            </div>

            <CategoriesResponsive categories={categories} />
            <Prescription />
        </header>
    );
}

export default Header;
