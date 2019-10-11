import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => {
    // debugger
    return (
        <Route path={path} exact={exact} render={(props) => {
            if(loggedIn) {
                // debugger
                return <Component {...props} />
            } else {
                // debugger
                return <Redirect to="/" />
            }
        }} />
    )
}


const mapStateToProps = state => {
    // debugger
    return { 
        // state.session.id
        loggedIn: Boolean(state.session.currentUserId) 
    }
}
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));