import React from 'react';
// import CurrentUserNavbar from './current_user_navbar';
import ProfileWallpaper from './profile_wallpaper';
import OwnerBio from './owner_bio';
// import CreatePost from '../post/CreatePost';
import CreatePostContainer from '../post/create_post_container';
import About from './about';
import {Route, Switch, withRouter} from 'react-router-dom';

class UserProfile extends React.Component {
    render() {
        return (
            <div className="main_container">
                <ProfileWallpaper profileOwner={this.props.currentUser} currentUser={this.props.currentUser} />
                <div className="profile_lower_body">
                    {/* this is where routing goes */}
                    <Switch>
                        <Route exact path={`/users/${this.props.currentUser.id}`}>
                            <OwnerBio currentUser={this.props.currentUser} />
                            <CreatePostContainer currentUser={this.props.currentUser} />
                        </Route>
                        <Route exact path={`/users/${this.props.currentUser.id}/about`}>
                            <About currentUser={this.props.currentUser} />
                        </Route>
                    </Switch>

                    {/* <OwnerBio currentUser={this.props.currentUser} /> */}
                    {/* <CreatePostContainer currentUser={this.props.currentUser} /> */}

                </div>
                <button onClick={this.props.logout}>Log out for good</button>
            </div>
        )
    }
}

export default UserProfile;