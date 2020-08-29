import React from 'react';

import BasicInfo from './BasicInfo/BasicInfo';
import Cart from '../../Cart/cart';
import WishList from '../../Cart/wish';

import './Profile.css';
import { Switch, Route, useRouteMatch, useParams, Redirect } from 'react-router-dom';
import AnchorButton from '../../../Utilities/Link/AnchorButton/AnchorButton';

const ProfileChildPath = () => {
    let { profileChildPath } = useParams();

    switch(profileChildPath) {
        case 'basic-info':
            return <BasicInfo />;
        case 'cart':
            return <Cart />
        case 'wishlist':
            return <WishList />
    }
}

const Profile = () => {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <div className="row">
                <div className="col s12 m12 l12 profile-links right-align">
                    <AnchorButton 
                        href={`${url}/basic-info`} title="Basic Info"
                        using_router={true}
                        other_classes={"black-text btn-flat"} icon_name={"info_outline"}/>
                    <AnchorButton 
                        href={`${url}/cart`} title="Cart"
                        using_router={true}
                        other_classes={"black-text btn-flat"} icon_name={"shopping_cart"}/>
                    <AnchorButton 
                        href={`${url}/wishlist`} title="Wishlist"
                        using_router={true}
                        other_classes={"black-text btn-flat"} icon_name={"favorite_border"}/>
                </div>
                <div className="col s12 m12 l12">
                    <Switch>
                        <Route exact path={`${path}`}>
                            <Redirect to={`${path}/basic-info`} />
                        </Route>
                        <Route exact path={`${path}/:profileChildPath`}>
                            <ProfileChildPath />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Profile;