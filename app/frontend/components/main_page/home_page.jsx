import React from 'react';
import {withRouter, Route, Link} from 'react-router-dom';
import UserNavbar from '../profile/user_navbar';
import CreatePostContainer from '../post/create_post_container';
import {fetchPosts, logout, deletePost} from '../../actions/session_actions';
import PostIndexItemContainer from '../post/post_index_item_container';
// import DropdownContainer from '../dropdown/dropdown_container';

const HomePage = ({logout, currentUser, fetchPosts, pathname, deletePost, showDropdown}) => {
    // 
    let pages;
    if (pathname === "/") {
        pages = (
            <div className="home_page_body">
                <div className="name_and_create_post">
                    <div className="img_and_name">
                        <img src={currentUser.profilePhotoUrl}/>
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
            <UserNavbar />
            {pages}
        </div>
    );
};

export default withRouter(HomePage);