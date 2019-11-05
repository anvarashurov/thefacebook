import React from 'react';
import {withRouter, Route, Link} from 'react-router-dom';
import UserNavbar from '../profile/user_navbar';
import CreatePostContainer from '../post/create_post_container';
import {fetchPosts, logout, deletePost} from '../../actions/session_actions';
// import { connect } from 'react-redux';
import PostIndexItemContainer from '../post/post_index_item_container';

const HomePage = ({logout, currentUser, fetchPosts, pathname, deletePost}) => {
    // debugger
    let pages;
    if (pathname === "/") {
        pages = (
            <div className="home_page_body">
                <div className="name_and_create_post">
                    <div className="img_and_name">
                        <img src={window.profile}/>
                        <Link to={`/users/${currentUser.id}`}>{currentUser.first_name + " " + currentUser.last_name}</Link>
                    </div>
                    <CreatePostContainer deletePost={deletePost} />
                </div>
                <div className="all_posts">
                    <PostIndexItemContainer postOwner={currentUser} deletePost={deletePost} />
                </div>
            </div>
        )
    }
    return (
        <div className="home_page_items">
            <UserNavbar currentUser={currentUser} logout={logout} />
            {pages}
        </div>
    );
};

// const mdp = dispatch => {
//     debugger
//     return {
//         fetchPosts: () => dispatch(fetchPosts()),
//         logout: () => dispatch(logout()),
//     }
// }

export default withRouter(HomePage);

