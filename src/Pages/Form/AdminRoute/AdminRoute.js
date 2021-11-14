import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const {user,isLoading,admin} = useAuth()
    if(isLoading){<div classNmae="mx-auto">
    <Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" />
</div>}
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;