import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
// import { ProtectedRoute } from '../../util/route_util';
import LandingPageNavbar from './landing_page_navbar';
import LandingPageBody from './landing_page_body';
// import ProfileContainer from '../profile/profile_container';
import HomePage from '../main_page/home_page';
import About from '../profile/about';

class LandingPage extends React.Component {

    render() {
        // debugger

        // can implement Ternary to get around it with condition being currentUser exists.
        let page;
        if (typeof this.props.currentUser !== 'undefined') {
            page = (
                // <ProfileContainer logout={this.props.logout} />
                <HomePage deletePost={this.props.deletePost} pathname={this.props.location.pathname} logout={this.props.logout} currentUser={this.props.currentUser} fetchPosts={this.props.fetchPosts}/>
            )
        } else {
            // debugger
            page = (
                <div className="landing_page">
                    <LandingPageNavbar />
                    <LandingPageBody />
                </div>
            )
        }
        return page;
    }
}

// meaning it has to match a specified path to be rendered
export default withRouter(LandingPage);