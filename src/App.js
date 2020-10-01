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
import GoogleAccountInit from './PageBlocks/GoogleAccount/GoogleAccountInit';
import { LOCAL_STORAGE_NAMES } from './Globals/Config';
const Header = lazy( () => import('./PageBlocks/Header/Header') );
const Footer = lazy( () => import('./PageBlocks/Footer/Footer') );

const App = React.memo(function App() {

  const user = useSelector( state => state.user );

  useEffect( () => {
    const previously_signed_in = localStorage.getItem(LOCAL_STORAGE_NAMES.PREVIOUSLY_SIGNED_IN);
    const previous_sign_in_method = localStorage.getItem(LOCAL_STORAGE_NAMES.PREVIOUS_SIGN_IN_METHOD);

    if (previously_signed_in) {
      alert(previously_signed_in);
      alert(previous_sign_in_method);
    }
  }, [])

  return (
    <div className="App">
        <Suspense fallback={<SuperSimpleLoadingScreen />}>
          <Header />
            <Routes user={user}/>
          <Footer />
        </Suspense>
    </div>
  );
})

export default App;
