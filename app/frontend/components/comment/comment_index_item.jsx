import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { deleteComment } from '../../actions/comment_actions';
import CreateCommentContainer from '../comment/create_comment_container';
const CommentIndexItem = (props) => {

    function formatHour(date) {
        let allMonths = "January February March April May June July August September October November December".split(" ");
        let month = allMonths[date.getMonth()];
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = `${month} ${date.getDay()} at ${hours}:${minutes} ${ampm}`;
        return strTime;
    }

    // convert to Date object
    // let date = new Date(props.post.extra);
    debugger
    let commentCreatedAt = new Date(props.comment.createdAt);
    commentCreatedAt = formatHour(commentCreatedAt);
    // commentCreatedAt = commentCreatedAt.slice(4, commentCreatedAt.length);

    // let replyContainer = null;

    const [replyContainer, setReplyContainer] = useState(null);

    function handleReply() {
        debugger
        // TODO : more sophisticated reply container that disappears after commenting
        if(replyContainer === null) {
            setReplyContainer(
                <div className="reply_form">
                    <CreateCommentContainer /> 
                </div>
            )
        } else {
            setReplyContainer(null);
        }
    }

    return (
        <div className="one_comment">
            <div className="comment_body">
                
                <img src={props.commentOwner.profilePhotoUrl} style={{width: '32px', height: '32px'}}/>
                
                <div className="content_and_footer_container">
                    
                    <div className="author_and_comment_content">
                        <Link to={`/users/${props.commentOwner.id}`}>
                            <span className="comment_author">{props.commentOwner.first_name + " " + props.commentOwner.last_name}</span>
                        </Link>
                        <span className="comment_content">{props.comment.content}</span>
                    </div>
                    
                    <div className="comment_footer">
                        <button>
                            Like
                        </button>
                        <button onClick={handleReply}>
                            Reply
                        </button>
                        <span>
                            {commentCreatedAt}
                        </span>
                    </div>

                    {replyContainer}

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