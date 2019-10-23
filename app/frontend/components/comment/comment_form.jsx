

import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = this.props.comment;
    }

    update(e) {
        this.setState({ content: e.target.value });
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        if (this.state.content.length > 0) {
            this.props.action(this.state).then(() => {this.clearForm()});
        }
    }

    clearForm() {
        this.setState({ content: '' });
    }

    render() {
        return (
            <form className='comment_form' onSubmit={this.handleSubmit}>
                <img className="comment_form_profile" src={window.profile} style={{ width: '32px', height: '32px' }}/>
                <input
                    id={`${this.state.post_id}`}
                    value={this.state.content}
                    onChange={this.update}
                    placeholder='Write a comment...'
                />
            </form>
        );
    }
}

export default CommentForm;