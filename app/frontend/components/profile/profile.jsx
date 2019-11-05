import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

// components
import ProfileWallpaper from './profile_wallpaper';
import OwnerBio from './owner_bio';
import CreatePostContainer from '../post/create_post_container';
import About from './about';
import PostIndexItemContainer from '../post/post_index_item_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        return this.props.fetchAllUsers();
    }

    render() {

        // This is a way to render all users
        if(this.props.users.length === 1) { 
            return null;
        }
        
        let users = this.props.users;
    
        return (
            <div className="main_container">
                
                <ProfileWallpaper
                    // coming from URL
                    profileOwner={this.props.profileOwner} 
                    // logged in user
                    currentUser={this.props.currentUser}
                    // current user SENDS to profile owner
                    createFriendRequest = {this.props.createFriendRequest}
                    openModal={this.props.openModal}
                    closeModal={this.props.closeModal}
                />

                <div className="profile_lower_body">
                    <Switch>
                        <Route exact path={`/users/${this.props.profileOwner.id}`}>
                            {/* <OwnerBio 
                                profileOwner={this.props.profileOwner}
                                currentUser={this.props.currentUser}
                            /> */}
                            <div className="create_and_show_posts">
                                <CreatePostContainer profileOwner={this.props.profileOwner} fetchPosts={this.props.fetchPosts} />
                                <PostIndexItemContainer postOwner={this.props.profileOwner.id} />                                
                            </div>
                        </Route>
                        <Route path={`/users/${this.props.profileOwner.id}/about`}>
                            <About 
                                profileOwner={this.props.profileOwner}
                                currentUser={this.props.currentUser} 
                            />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Profile;