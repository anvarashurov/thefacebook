import React from 'react';
import ProfileWallpaper from './profile_wallpaper';
import OwnerBio from './owner_bio';
import CreatePostContainer from '../post/create_post_container';
import About from './about';
import {Route, Switch, withRouter} from 'react-router-dom';
import PostIndexItemContainer from '../post/post_index_item_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     debugger
    //     return this.props.fetchAllUsers();
    // }

    render() {

        let users = this.props.users;
        
        debugger
        return (
            <div className="main_container">
                <ProfileWallpaper profileOwner={this.props.profileOwner} currentUser={this.props.currentUser} />
                <div className="profile_lower_body">
                    <Switch>
                        <Route exact path={`/users/${this.props.profileOwner.id}`}>
                            <OwnerBio profileOwner={this.props.profileOwner} />
                            <div className="create_and_show_posts">
                                <CreatePostContainer profileOwner={this.props.profileOwner} fetchPosts={this.props.fetchPosts} />
                                <PostIndexItemContainer postOwner={this.props.profileOwner.id} />                                
                            </div>
                        </Route>
                        <Route path={`/users/${this.props.profileOwner.id}/about`}>
                            <About profileOwner={this.props.profileOwner} />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Profile;