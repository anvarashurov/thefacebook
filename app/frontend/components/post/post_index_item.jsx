import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import CreateCommentContainer from '../comment/create_comment_container';
import CommentIndexItemContainer from "../comment/comment_index_item_container";
// import DropdownContainer from '../dropdown/dropdown_container';

const PostIndexItem = (props) => {
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

    // let postOptions;

    // if(props.currentUser.id !== props.postOwner.id) {
    //     postOptions = null;
    // } else {
    //     <div className="triple">
    //         <img className="trippledots" src={window.trippledots} alt="T" />
    //         {this.props.dropdownDisplayed && <DropdownContainer />}
    //     </div>
    // }

    let postOptions;
    // debugger
    // postOwner.id previously
    if(props.currentUser.id === props.profileOwner.id || props.currentUser.id === props.post.authorId) {
        postOptions = (
        <div className="post_options">
            <button onClick={() => props.openModal({type: 'edit_post', post: props.post})}>
                <img src={window.edit} alt=""/>
            </button>
            <button onClick={() => props.deletePost(props.post.id)}>
                <img src={window.bin} alt=""/>
            </button>
        </div>
        )
    } else { postOptions = null }

    // Authors

    let authors;
    let postAuthor;
    debugger
    if(props.post.receiverId === props.profileOwner.id && props.post.authorId !== props.profileOwner.id) {
        postAuthor = props.users[props.post.authorId];
        authors = (
            <div className="authors">
                {/* <span className="post_author">{props.postOwner.first_name + " " + props.postOwner.last_name} > </span> 
                <span className="post_author">{props.profileOwner.first_name + " " + props.profileOwner.last_name}</span> */}
                <Link to={`/users/${postAuthor.id}`}>
                    <span className="post_author">{postAuthor.first_name + " " + postAuthor.last_name} > </span>
                </Link>
                <Link to={`/users/${props.profileOwner.id}`}>
                    <span className="post_author">{props.profileOwner.first_name + " " + props.profileOwner.last_name}</span>
                </Link>
            </div>
        )
    } else {
        postAuthor = props.profileOwner;
        authors = (
            <Link to={`/users/${postAuthor.id}`}>
                <span className="post_author">{postAuthor.first_name + " " + postAuthor.last_name}</span>
            </Link>
        )
    }
    
    return (
        <>
            <div className="one_post">
                <div className="one_post_left_child">
                    <div>
                        <Link to={`/users/${postAuthor.id}`}>
                            <img className="post_author_profile" src={postAuthor.profilePhotoUrl}/>
                        </Link>
                        <div className="name_date_container">
                            {authors}
                            <span>
                                {timeOfPost}
                            </span>
                        </div>
                    </div>
                    {/* <div className="triple">
                        <img className="trippledots" src={window.trippledots} alt="T"/>
                    </div> */}
                    { postOptions }
                </div>
                <span className="post_content">{props.post.content}</span>
                {url}
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