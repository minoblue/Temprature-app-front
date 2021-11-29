import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthState } from '../Context';

const RouteHandler = ({ component: Component, path, isPrivate, ...rest }) => {
    const authDetails = useAuthState();
    return (
        <Route
            path={path}
            render={(props) =>
                isPrivate && !Boolean(authDetails.token) ? (
                    <Redirect to={{ pathname: '/login' }} />
                ) : (
                    <Component {...props} />
                )
            }
            {...rest}
        />
    );
};

export default RouteHandler;
