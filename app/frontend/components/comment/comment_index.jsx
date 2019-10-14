import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        return this.props.fetchComments();
    }

    render() {

        debugger

        let myId = this.props.commentOwner.id;
        let myComments = [];
        let allComments = this.props.comments;

        for (let i = 0; i < allComments.length; i++) {
            if (allComments[i].authorId === parseInt(myId)) {
                myComments.push(allComments[i]);
            }
        }

        const comments = myComments.slice(0).reverse().map((comment) => {
            return <CommentIndexItem comment={comment} key={comment.id} commentOwner={this.props.commentOwner} />
        })

        return (
            <div>
                <ul>
                    {comments}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;