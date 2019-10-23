import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { deleteComment } from '../../actions/comment_actions';
// import CreateCommentContainer from '../comment/create_comment_container';
const CommentIndexItem = (props) => {

    let commentCreatedAt = new Date(props.comment.createdAt);
    commentCreatedAt = commentCreatedAt.toDateString();
    debugger
    commentCreatedAt = commentCreatedAt.slice(4, commentCreatedAt.length);

    return (
        <div className="one_comment">
            <div className="comment_body">
                
                <img src={window.profile} style={{width: '32px', height: '32px'}}/>
                
                <div className="content_and_footer_container">
                    
                    <div className="author_and_comment_content">
                        <Link to={`/users/${props.commentOwner.id}`}>
                            <span className="comment_author">{props.commentOwner.first_name + " " + props.commentOwner.last_name}</span>
                        </Link>
                        <span className="comment_content">{props.comment.content}</span>
                    </div>
                    
                    <div className="comment_footer">
                        <a >
                            Like
                        </a>
                        <a >
                            Reply
                        </a>
                        <span>
                            {commentCreatedAt}
                        </span>
                    </div>

                </div>
            </div>
            {/* <button onClick={() => props.deletePost(props.post.id)} className="delete_post_button">Delete</button> */}
        {/* <div className="comment_children">

        </div> */}
        {/* <CreateCommentContainer postId={props.post.id} /> */}
        </div>
           
    )
};

// const mdp = dispatch => {
//     return {
//         deletePost: id => dispatch(deletePost(id))
//     };
// };

export default CommentIndexItem;