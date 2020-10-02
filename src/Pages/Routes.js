import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthenticateRoute from '../Globals/AuthenticateRoute';
import { HOME, PRODUCTS, PRODUCT_VIEW, SIGNIN, SIGNUP, CHECKOUT, CONTACT_US, PROFILE } from '../Globals/PathConstants';

const Home = lazy( () => import('./Home/Home') );
const Products = lazy( () => import('./Products/Products') );
const ProductView = lazy( () => import('./ProductView/ProductView') );
const SignupSM=lazy( () => import('./Account/signup_sm') );
const LoginSM=lazy( () => import('./Account/login_sm') );
const CheckOut=lazy( () => import('./checkout/checkout') );
const ContactUs = lazy( () => import('./ContactUs/ContactUs') );
const Profile = lazy( () => import('./Account/Profile/Profile'));
// const Cart=lazy( () => import('./Cart/cart') );
// const WishList=lazy( () => import('./Cart/wish') );

const Routes = ({user}) => {
    return (
        <Switch>
            <Route exact path={HOME} component={Home} />
            <Route exact path={PRODUCTS} component={Products} />
            <Route exact path={PRODUCT_VIEW} component={ProductView} />
            <Route  path={SIGNIN} component={LoginSM}  />
            <Route  path={SIGNUP} component={SignupSM}  />
            {/* <Route  path="/cart" component={Cart}  /> */}
            {/* <Route  path="/wish-list" component={WishList}  /> */}
            <Route  path={CHECKOUT} component={CheckOut}  />           
            <Route exact path={CONTACT_US} component={ContactUs} />
            {/* <Route path={PROFILE} component={Profile} /> */}
            <AuthenticateRoute path={PROFILE} component={Profile} user={user}/>
        </Switch>
    );
}

export default Routes;