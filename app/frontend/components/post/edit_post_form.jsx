import React from 'react';

class EditPostForm extends React.Component {
    constructor(props) {
        debugger
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.state = this.props.post;
    }

    handleChange() {
        debugger
        return e => {
            this.setState({ content: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePost(this.state).then(() => this.props.closeModal());
    }

    handleExit(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    render() {

        debugger

        return (
            <div className="edit_post_container">
                <form onSubmit={this.handleSubmit}>
                    <div className="edit_post_first_row">
                        <span>
                            Edit Post
                        </span>
                        <button onClick={this.handleExit}>
                            &#10006;
                        </button>
                    </div>
                    <div className="create_post_area">
                        <img src={this.props.author.profilePhotoUrl} style={{ width: '60px', height: '60px' }} />
                        <textarea onChange={this.handleChange()} value={this.state.content} placeholder="What's on your mind?"></textarea>
                    </div>
                    <input id="create_post_button" type="submit" value="Save" />
                </form>
            </div>           
        );
    }
}
export default EditPostForm;