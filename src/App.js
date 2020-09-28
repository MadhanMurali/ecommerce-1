import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

//CSS imports
import 'materialize-css/dist/css/materialize.min.css'; // keep this as first css import -- do not change line pos --
import './App.css';

//SASS imports
import "progress-tracker/src/styles/progress-tracker.scss";

//JS imports
import SuperSimpleLoadingScreen from './Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen';
import AuthenticateRoute from './Globals/AuthenticateRoute';
import { HOME, PRODUCTS, PRODUCT_VIEW, SIGNIN, SIGNUP, CHECKOUT, CONTACT_US, PROFILE, SIGNED_IN } from './Globals/PathConstants';

const Header = lazy( () => import('./PageBlocks/Header/Header') );
const Footer = lazy( () => import('./PageBlocks/Footer/Footer') );
const Home = lazy( () => import('./Pages/Home/Home') );
const Products = lazy( () => import('./Pages/Products/Products') );
const ProductView = lazy( () => import('./Pages/ProductView/ProductView') );
const SignupSM=lazy( () => import('./Pages/Account/signup_sm') );
const LoginSM=lazy( () => import('./Pages/Account/login_sm') );
const Cart=lazy( () => import('./Pages/Cart/cart') );
const WishList=lazy( () => import('./Pages/Cart/wish') );

const CheckOut=lazy( () => import('./Pages/checkout/checkout') );

const ContactUs = lazy( () => import('./Pages/ContactUs/ContactUs') );
const Profile = lazy( () => import('./Pages/Account/Profile/Profile'));

function App() {

  const user = useSelector( state => state.user );

  return (
    <div className="App">
        <Suspense fallback={<SuperSimpleLoadingScreen />}>
          <Header />
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
            <AuthenticateRoute path={PROFILE} component={Profile} user={user} requirement={SIGNED_IN}/>
          </Switch>
          <Footer />
        </Suspense>
    </div>
  );
}

export default App;
