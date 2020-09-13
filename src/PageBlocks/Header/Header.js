import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
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

const API = "http://localhost:3000/"

const Header = () => {

    const [categories, setCategories] = useState("");
    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [pictures, setPictures] =  useState([]);
    const [value, setValue] = useState("");
    useEffect( () => {
        fetch(API + "categories")
            .then(response => response.json())
            .then(json =>{
                setCategories(json);
                setCategoriesLoading(false);
            });
    }, []);

    const onDrop = (picture) =>  {
        setPictures(pictures.concat(picture))
        // this.setState({
        //     pictures: this.state.pictures.concat(picture),
        // });
    }
    const search_products = (search) => {
        console.log("searching products", search);
    }
    
    return (
        <header className="">
            <nav className="nav-extended teal lighten-2">
                <div className="nav-wrapper">

                    <Link to="/" className="brand-logo header-logo left">
                        <img src={Logo} alt="Logo" className="header-logo-img"></img>
                    </Link>

                    <LargeScreenList button_color_class="teal darken-3"/>

                    <SmallScreenSideMenu menu_button_color_class="teal darken-3" link_color_class="black-text"/>

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

                            <ImageUploader
                            withIcon={true}
                            withLabel = {false}
                            label= {"Max file size: 5 MB"}
                            buttonText='Upload Prescription'
                            onChange={onDrop}
                            imgExtension={['.jpg', '.jpeg', '.png']}
                            maxFileSize={5242880}
                            withPreview = {true}
                            singleImage={true}

                        />
                        
                        </div>
                        <div className="col s12 m12 l4"></div>
                    </div>
                </div>

                <div className="nav-content categories-nav">
                    { (categoriesLoading !== true) && 
                        <Categories categories={categories}/>
                    }
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

            { (categoriesLoading !== true) && 
                <CategoriesResponsive categories={categories} />
            }
            
        </header>
    );
}

export default Header;
