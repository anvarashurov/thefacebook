import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import CreateCommentContainer from '../comment/create_comment_container';
import CommentIndexItemContainer from "../comment/comment_index_item_container";

const PostIndexItem = (props) => {
    debugger
    const numComments = props.post.commentIds.length;
    let output;

    if (numComments === 1) {
        output = numComments + " " + "Comment";
    } else if (numComments > 1) {
        output = numComments + " " + "Comments";
    }

    // convert to Date object
    let timeOfPost = new Date(props.post.extra);
    // to save it as a string (only date part)
    timeOfPost = timeOfPost.toDateString();
    // to get Oct 22 2019
    timeOfPost = timeOfPost.slice(4, timeOfPost.length);


    let url;
    
    if(props.post.photoURL) {
        url = <img src={props.post.photoURL} alt="T" />
    }
    
    return (
        <>
            <div className="one_post">
                <div>
                    <Link to={`/users/${props.postOwner.id}`}>
                        <img className="post_author_profile" src={props.postOwner.profilePhotoUrl}/>
                    </Link>
                    <div className="name_date_container">
                        <Link to={`/users/${props.postOwner.id}`}>
                            <span className="post_author">{props.postOwner.first_name + " " + props.postOwner.last_name}</span>
                        </Link>
                        <span>
                            {timeOfPost}
                        </span>
                    </div>
                    <div className="triple">
                        <img className="trippledots" src={window.trippledots} alt="T"/>
                    </div>
                    {/* {dropdown} */}
                </div>
                <span className="post_content">{props.post.content}</span>
                {url}
                {/* <button onClick={() => props.deletePost(props.post.id)} className="delete_post_button">Delete</button> */}
                <div className="num_comments">
                    {output} 
                </div>
            
                <div className="post_footer">
                    <div className="like_comment_container">
                        <li>
                            <img src={window.like}/>                            
                            <span>Like</span>
                        </li>
                        <li>
                            <img src={window.comment}/>
                            <span>
                                Comment
                            </span>
                        </li>
                    </div>
                </div>
                <CommentIndexItemContainer postId={props.post.id}/>
                <CreateCommentContainer postId={props.post.id}/>
            </div>
        
        </>
    )
};

const mdp = dispatch => {
    return {
        deletePost: id => dispatch(deletePost(id))
    };
};

export default withRouter(connect(null, mdp)(PostIndexItem));