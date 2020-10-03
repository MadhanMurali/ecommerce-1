import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { HOME, SIGNIN, SIGNED_IN } from './PathConstants';

const AuthenticateRoute = (props) => {
    const [ route, setRoute ] = useState("");

    const location = useLocation();

    useEffect( () => {
        setRoute (
            (props.user.signed_in)
                 ? <Route {...props} />
                 : <Redirect to={SIGNIN} />
        );
    }, [location]);

    return route;
}

export default AuthenticateRoute;