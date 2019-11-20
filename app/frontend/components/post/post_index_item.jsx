import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import CreateCommentContainer from '../comment/create_comment_container';
import CommentIndexItemContainer from "../comment/comment_index_item_container";

const PostIndexItem = (props) => {
    const numComments = props.post.commentIds.length;
    let output;

    if (numComments === 1) {
        output = numComments + " " + "Comment";
    } else if (numComments > 1) {
        output = numComments + " " + "Comments";
    }

    function formatHour(date) {
        let allMonths = "January February March April May June July August September October November December".split(" ");
        let month = allMonths[date.getMonth()];
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = `${month} ${date.getDate()} at ${hours}:${minutes} ${ampm}`;
        return strTime;
    }

    let date = new Date(props.post.extra);
    
    let timeOfPost = formatHour(date);

    let url;
    if(props.post.photoURL) {
        url = (
            <button onClick={() => props.openModal({ type: 'view_image', imageUrl: props.post.photoURL })}>
                <div className="post_image">
                    <img src={props.post.photoURL} alt="T" />
                </div>
            </button>
        )
        
    }
    let postOptions;

    if(props.post.authorId === props.currentUser.id) {
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

    let authors;
    let postAuthor;
    let postReceiver;
    debugger
    
    if(props.post.receiverId !== props.post.authorId) {
        debugger
        for(let i = 0; i < props.users.length; i++) {
            if(props.users[i].id === props.post.authorId) {
                postAuthor = props.users[i];
            }
            if(props.users[i].id === props.post.receiverId) {
                postReceiver = props.users[i];
            }
        }
        authors = (
            <div className="authors">
               <Link to={`/users/${postAuthor.id}`}>
                    <span className="post_author">{postAuthor.first_name + " " + postAuthor.last_name} &#62; </span>
                </Link>
                <Link to={`/users/${postReceiver.id}`}>
                    <span className="post_author">{postReceiver.first_name + " " + postReceiver.last_name}</span>
                </Link>
            </div>
        )
    } else {
        for (let i = 0; i < props.users.length; i++) {
            if (props.users[i].id === props.post.authorId) {
                postAuthor = props.users[i];
            }
        }
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