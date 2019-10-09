import React from 'react';
import CurrentUserNavbar from './current_user_navbar';
import ProfileWallpaper from './profile_wallpaper';
import OwnerBio from './owner_bio';
// import CreatePost from '../post/CreatePost';
import CreatePostContainer from '../post/CreatePostContainer';
import About from './about';
import {Route, Switch, withRouter} from 'react-router-dom';




class UserProfile extends React.Component {
    render() {
        // debugger
        let owner = this.props.currentUser;

        return (
            <div className="main_container">
                <ProfileWallpaper profileOwner={this.props.currentUser} currentUser={this.props.currentUser} />
                <div className="profile_lower_body">
                    {/* this is where routing goes */}
                    <Switch>
                        <Route exact path={`/users/${owner.id}/`}>
                            <OwnerBio currentUser={this.props.currentUser} />
                            <CreatePostContainer currentUser={this.props.currentUser} />
                        </Route>
                        <Route exact path={`/users/${owner.id}/about`}>
                            <About currentUser={this.props.currentUser} />
                        </Route>

                        {/* <Route path="/users/:userId/" component={OwnerBio} />
                        <Route path="/users/:userId/about" component={About} currentUser={this.props.currentUser} />
                        <Route path="/users/:userId/" /> */}
                        
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