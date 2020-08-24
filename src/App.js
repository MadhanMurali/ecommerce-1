import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

//CSS imports
import 'materialize-css/dist/css/materialize.min.css'; // keep this as first css import -- do not change line pos --
import './App.css';
import SuperSimpleLoadingScreen from './Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen';

//JS imports
const Header = lazy( () => import('./PageBlocks/Header/Header') );
const Footer = lazy( () => import('./PageBlocks/Footer/Footer') );
const Home = lazy( () => import('./Pages/Home/Home') );
const Products = lazy( () => import('./Pages/Products/Products') );
const ProductView = lazy( () => import('./Pages/ProductView/ProductView') );

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
          </Switch>
          <Footer />
        </Suspense>
    </div>
  );
}

export default App;