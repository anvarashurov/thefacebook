import React from 'react';
import {withRouter} from 'react-router-dom';
import CurrentUserNavbar from '../profile/current_user_navbar';

const HomePage = ({logout, currentUser}) => {
    return (
        <>
            <CurrentUserNavbar currentUser={currentUser} logout={logout} />
            <button onClick={logout}>Log out for good</button>
        </>
    );
};

export default withRouter(HomePage);