import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//CSS imports
import 'materialize-css/dist/css/materialize.min.css'; // keep this as first css import -- do not change line pos --
import './App.css';

//SASS imports
import "progress-tracker/src/styles/progress-tracker.scss";

//JS imports
import SuperSimpleLoadingScreen from './Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen';
import Routes from './Pages/Routes';
const Header = lazy( () => import('./PageBlocks/Header/Header') );
const Footer = lazy( () => import('./PageBlocks/Footer/Footer') );

function App() {

  const user = useSelector( state => state.user );

  return (
    <div className="App">
        <Suspense fallback={<SuperSimpleLoadingScreen />}>
          <Header />
            <Routes user={user}/>
          <Footer />
        </Suspense>
    </div>
  );
}

export default App;
