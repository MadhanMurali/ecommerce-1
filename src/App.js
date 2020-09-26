import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

//CSS imports
import 'materialize-css/dist/css/materialize.min.css'; // keep this as first css import -- do not change line pos --
import './App.css';
import SuperSimpleLoadingScreen from './Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen';

//SASS imports
import "progress-tracker/src/styles/progress-tracker.scss";

//JS imports
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
  return (
    <div className="App">
        <Suspense fallback={<SuperSimpleLoadingScreen />}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/product-view">
              <ProductView />
            </Route>
            <Route  path="/login" component={LoginSM}  />
            <Route  path="/signup" component={SignupSM}  />
            {/* <Route  path="/cart" component={Cart}  /> */}
            {/* <Route  path="/wish-list" component={WishList}  /> */}
            <Route  path="/checkout" component={CheckOut}  />           
            <Route exact path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Suspense>
    </div>
  );
}

export default App;
