import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { deleteComment } from '../../actions/comment_actions';
// import CreateCommentContainer from '../comment/create_comment_container';
const CommentIndexItem = (props) => {
    return (
        <>
            <div className="one_comment">
                <div>
                    <img src={window.profile} style={{width: '32px', height: '32px'}}c/>
                    <Link to={`/users/${props.commentOwner.id}`}>
                        <span className="comment_author">{props.commentOwner.first_name + " " + props.commentOwner.last_name}</span>
                    </Link>
                </div>
                <span className="comment_content">{props.comment.content}</span>
                {/* <button onClick={() => props.deletePost(props.post.id)} className="delete_post_button">Delete</button> */}
            </div>
            {/* <CreateCommentContainer postId={props.post.id} /> */}
        </>
    )
};

// const mdp = dispatch => {
//     return {
//         deletePost: id => dispatch(deletePost(id))
//     };
// };

export default CommentIndexItem;