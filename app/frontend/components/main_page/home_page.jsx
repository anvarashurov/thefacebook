import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import UserNavbar from '../profile/user_navbar';
import CreatePostContainer from '../post/create_post_container';
import PostIndexItemContainer from '../post/post_index_item_container';

const HomePage = ({currentUser, pathname}) => {
    // 
    let pages;
    if (pathname === "/") {
        pages = (
            <div className="home_page_body">
                <div className="name_and_create_post">
                    <div className="homepage_left_child">
                        <Link to={`/users/${currentUser.id}`}>
                            <img src={currentUser.profilePhotoUrl}/>
                            <span>
                                {currentUser.first_name + " " + currentUser.last_name}
                            </span>
                        </Link>
                        <a href="#" id="newsfeed">
                            <img src={window.newsfeed} alt=""/>
                            <span>
                                Feed
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/antoxaaa7/" target='_blank'>
                            <img src={window.linkedin} alt=""/> 
                            <span>
                                Likedin
                            </span> 
                        </a>
                        <a href="https://angel.co/antoxaaa7" target='_blank'>
                            <img src={window.angellist} alt=""/>
                            <span>
                                Angel List
                            </span>
                        </a>
                        <a href="https://github.com/antox7" target='_blank'>
                            <img src={window.github} alt=""/>
                            <span>
                                Github
                            </span>
                        </a>

                    </div>
                    <div className="homepage_right_child">
                        <CreatePostContainer profileOwner = {currentUser} source="homepage" />
                    </div>

                </div>
                <div className="all_posts">
                    <PostIndexItemContainer source="homepage" />
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