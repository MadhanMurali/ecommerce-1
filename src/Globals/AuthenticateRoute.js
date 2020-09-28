import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { HOME, SIGNIN, SIGNED_IN } from './PathConstants';

const AuthenticateRoute = (props) => {
    const [ route, setRoute ] = useState("");

    const location = useLocation();

    useEffect( () => {
        switch (props.requirement) {
            case SIGNED_IN:
                return setRoute (
                       (props.user.logged_in)
                            ? <Route {...props} />
                            : <Redirect to={SIGNIN} />
                       );
            default:
                return setRoute (<Redirect to={HOME} />);
        }
    }, [location]);

    return route;
}

export default AuthenticateRoute;