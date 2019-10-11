import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {deletePost} from '../../actions/session_actions';
const PostIndexItem = (props) => {
    debugger
    return (
        <div className="one_post">
            <div>
                <img src={window.profile}/>
                <Link to={`/users/${props.postOwner.id}`}>
                <span className="post_author">{props.postOwner.first_name + " " + props.postOwner.last_name}</span>
                </Link>
            </div>
            <span className="post_content">{props.post.content}</span>
            {/* <form onSubmit={props.deletePost(props.post.id)}> */}
            <button onClick={() => props.deletePost(props.post.id)} className="delete_post_button">Delete</button>
            {/* </form> */}
        </div>
    )
};

const mdp = dispatch => {
    return {
        deletePost: id => dispatch(deletePost(id))
    };
};

export default withRouter(connect(null, mdp)(PostIndexItem));