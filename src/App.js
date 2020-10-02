import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//CSS imports
import 'materialize-css/dist/css/materialize.min.css'; // keep this as first css import -- do not change line pos --
import './App.css';

//SASS imports
import "progress-tracker/src/styles/progress-tracker.scss";

//JS imports
import SuperSimpleLoadingScreen from './Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen';
import Routes from './Pages/Routes';
import GoogleAccountInit from './PageBlocks/GoogleAccount/GoogleAccountInit';
import { GAuth2Context, GOOGLE_CLIENT_ID, LOCAL_STORAGE_NAMES } from './Globals/Config';
import { updatePreviousState } from './Globals/ReduxStores/UserSlice';
import { reset, update } from './Globals/ReduxStores/AppSlice';
import { useHistory, useLocation } from 'react-router-dom';
import { HOME, SIGNIN, SIGNUP } from './Globals/PathConstants';
const Header = lazy( () => import('./PageBlocks/Header/Header') );
const Footer = lazy( () => import('./PageBlocks/Footer/Footer') );

const App = React.memo (function App({store}) {

  const user = useSelector( state => state.user );
  const app = useSelector( state => state.app );
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [ googleAuth2, setGoogleAuth2 ] = useState(0);
  const [appLoggingIn, setAppLoggingIn] = useState(false);

  useEffect( () => {
    const previously_signed_in = localStorage.getItem(LOCAL_STORAGE_NAMES.PREVIOUSLY_SIGNED_IN);
    const previous_sign_in_method = localStorage.getItem(LOCAL_STORAGE_NAMES.PREVIOUS_SIGN_IN_METHOD);

    if (previously_signed_in) {
      dispatch ( updatePreviousState ({
        previously_signed_in: previously_signed_in,
        previous_sign_in_method: previous_sign_in_method,
      }));

      dispatch ( update ({
        previously_requested_page: window.location.pathname,
        signing_in: true,
      }));
    }
  }, []);

  useEffect ( () => {
    window.gapi.load('auth2', function() {
      window.gapi.auth2.init({
          client_id: GOOGLE_CLIENT_ID,
      }).then(function(auth2) {
        console.log("Google Auth Library loaded");
        GoogleAccountInit(store.dispatch, auth2);
        setGoogleAuth2(auth2);
      });
    });
  }, []);

  useEffect ( () => {
    setAppLoggingIn(app.signing_in);
  }, [app.signing_in]);

  useEffect ( () => {
    if (user.signed_in)
      if (app.previously_requested_page) {
        history.push(app.previously_requested_page);
        dispatch (
          reset()
        )
      }
      else {
        history.push(HOME);
        dispatch (
          reset()
        )
      }
  }, [user.signed_in]);

  useEffect ( () => {
    if ( location.pathname != SIGNIN && location.pathname != SIGNUP ) {
      dispatch ( update ({
        previously_requested_page: location.pathname,
      }));
    }
  }, [location]);

  const page =  <>
                  <Header />
                    <Routes user={user} app={app} />
                  <Footer />
                </>;

  return (
    <div className="App">
        <Suspense fallback={<SuperSimpleLoadingScreen />}>
          <GAuth2Context.Provider value={googleAuth2}>
            {
              (appLoggingIn)
                ? <SuperSimpleLoadingScreen />
                : page
            }            
          </GAuth2Context.Provider>
        </Suspense>
    </div>
  );
})

export default App;