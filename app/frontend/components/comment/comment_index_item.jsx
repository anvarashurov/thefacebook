import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import CreateCommentContainer from '../comment/create_comment_container';
const CommentIndexItem = (props) => {

    function formatHour(date) {
        let time;
        let d = Date.now();
        let sec = Math.floor((d - date) / 1000);
        if(sec < 60) {
            time = `${sec}s`;
        } else if(sec < (60*60)) {
            time = `${Math.floor(sec/60)}m`;
        } else if(sec < (60*60*24)) {
            time = `${Math.floor(sec/(60*60))}h`;
        }        
        else {
            time = `${Math.floor(sec/(60*60*24))}d`
        }
        return time
    }
    let commentCreatedAt = new Date(props.comment.createdAt);
    commentCreatedAt = formatHour(commentCreatedAt);
    const [replyContainer, setReplyContainer] = useState(null);

    function handleReply() {
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
                    <div>
                        {replyContainer}
                    </div>
                </div>
            </div>
        </div>
           
    )
};

export default CommentIndexItem;