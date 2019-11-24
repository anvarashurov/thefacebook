import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
// import PendingFriendContainer from './friend/pendingfriend_container';
// components
import ProfileWallpaperContainer from './profile_wallpaper_container';
import OwnerBio from './owner_bio';
import CreatePostContainer from '../post/create_post_container';
import About from './about';
import PostIndexItemContainer from '../post/post_index_item_container';
import PhotoIndexContainer from '../profile/photos/photo_index_container';
import FriendIndexContainer from './friend/friend_index_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        return this.props.fetchAllUsers();
    }

    render() {

        // debugger

        if(this.props.users.length === 1) { 
            return null;
        }
        
        let users = this.props.users;
    
        return (
            <div className="main_container">

                {/* <FriendContainer /> */}

                
                <ProfileWallpaperContainer
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
                            <div className="sidebar">
                                <OwnerBio 
                                    profileOwner={this.props.profileOwner}
                                    currentUser={this.props.currentUser}
                                    openModal={this.props.openModal}
                                />
                                {/* TODO style, onlyNine shows 9 in profile not the other*/}
                                
                                <div className="profile_photos_container">
                                    <PhotoIndexContainer onlyNine={9}/>
                                </div>
                                <div className="profile_friends_container">
                                    <FriendIndexContainer onlyNine={9}/>
                                </div>
                            </div>
                            <div className="create_and_show_posts">
                                <div>
                                    <CreatePostContainer profileOwner={this.props.profileOwner} fetchPosts={this.props.fetchPosts} />
                                </div>
                                <div>
                                    <PostIndexItemContainer postOwner={this.props.profileOwner.id} currentUser={this.props.currentUser} />                                
                                </div>
                            </div>
                        </Route>
                        <Route path={`/users/${this.props.profileOwner.id}/about`}>
                            <About 
                                profileOwner={this.props.profileOwner}
                                currentUser={this.props.currentUser} 
                            />
                        </Route>
                        {/* TODO Debug */}
                        <Route path={`/users/${this.props.profileOwner.id}/photos`}>
                            <div className="photos_section">
                                <PhotoIndexContainer />
                            </div>
                        </Route>
                        {/* TODO: SHOW FRIENDS HERE JUST LIKE ABOUT SECTION */}
                        <Route path={`/users/${this.props.profileOwner.id}/friends`}>
                            <div className="friends_section">
                                <FriendIndexContainer />
                            </div>
                        </Route>

                        {/* THE ROUTES */}

                    </Switch>
                </div>
            </div>
        )
    }
}

export default Profile;