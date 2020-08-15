import React from 'react';

import logo from '../../assets/img/footer/footer-logo-white.png';
import './Footer.css';

import BrandPunchLine from './BrandPunchLine/BrandPunchLine';
import HelplineAddress from './HelplineAddress/HelplineAddress';
import Links from './Links/Links';

const Footer = () => {

    const footerCompanyDescriptionText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ";

    const addressLineOne = "No.15, 2nd Main Road,";
    const addressLineTwo = "Tambaram, Tamil Nadu, India";

    return (
        <footer className="page-footer teal lighten-2">
            <div className="">
                <div className="row">
                    <div className="col s12 m12 l4">
                        <div className="col s12 m12 l12">
                            <BrandPunchLine 
                                logo={logo}
                                description={footerCompanyDescriptionText}
                                textColor={"black-text"}
                            />
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <HelplineAddress 
                                    helplineNumber="+91 90 3456 7890"
                                    addressLineOne={addressLineOne}
                                    addressLineTwo={addressLineTwo}
                                    number_color_class="red-text accent-3"
                                    icon_color_class="black-text"
                                    title_color_class="black-text"
                                    address_color_class="white-text"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m12 l8">
                        <div className="row">
                            <div className="col s12 m4 l4">
                                <Links 
                                    slug="information-links" 
                                    heading="Information" 
                                    heading_color_class="white-text"
                                    heading_bullet_style="label"
                                    list_bullet_style="bubble_chart"
                                    content_color={"red-text accent-3"}
                                    top_hr_color={"#d50000"}
                                    base_hr_color={"#0097a7"}
                                    using_router={true}
                                />
                            </div>
                            <div className="col s12 m4 l4">
                                <Links 
                                    slug="our-services-links" 
                                    heading="Our Services"
                                    heading_color_class="black-text"
                                    heading_bullet_style="label"
                                    list_bullet_style="bubble_chart"
                                    content_color={"red-text accent-3"}
                                    top_hr_color={"#d50000"}
                                    base_hr_color={"#0097a7"}
                                    using_router={true}
                                />
                            </div>
                            <div className="col s12 m4 l4">
                                <Links 
                                    slug="follow-us-links" 
                                    heading="Follow Us"
                                    heading_color_class="white-text"
                                    heading_bullet_style="label"
                                    list_bullet_style="bubble_chart"
                                    content_color={"red-text accent-3"}
                                    top_hr_color={"#d50000"}
                                    base_hr_color={"#0097a7"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container black-text">
                        © 2020 Copyright Text
                        <a className="black-text right" href="#!">More Links</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;