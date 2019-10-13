import React from 'react';
import ProfileWallpaper from './profile_wallpaper';
import OwnerBio from './owner_bio';
import CreatePostContainer from '../post/create_post_container';
import About from './about';
import {Route, Switch, withRouter} from 'react-router-dom';
import PostIndexItemContainer from '../post/post_index_item_container';

class UserProfile extends React.Component {
    render() {
        return (
            <div className="main_container">
                <ProfileWallpaper profileOwner={this.props.currentUser} currentUser={this.props.currentUser} />
                <div className="profile_lower_body">
                    <Switch>
                        <Route exact path={`/users/${this.props.currentUser.id}`}>
                            <OwnerBio currentUser={this.props.currentUser} />
                            <div className="create_and_show_posts">
                                <CreatePostContainer currentUser={this.props.currentUser} fetchPosts={this.props.fetchPosts} />
                                <PostIndexItemContainer postOwner={this.props.match.params.id} />                                
                            </div>
                        </Route>
                        <Route path={`/users/${this.props.currentUser.id}/about`}>
                            <About currentUser={this.props.currentUser} />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default UserProfile;