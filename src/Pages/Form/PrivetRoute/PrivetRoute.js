import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {user,isLoading} = useAuth()
    if(isLoading){<div classNmae="mx-auto">
    <Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" />
</div>}
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivetRoute;