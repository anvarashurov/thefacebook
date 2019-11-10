import React from 'react';
// import EditPostFormContainer from '../posts/edit_post_form_container';

class PostDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleDelete() {
        this.props.hideDropdown();
        // this.props.deletePost(this.props.postId);
    }
    handleEdit() {
        this.props.hideDropdown();
        // this.props.openModal(<EditPostFormContainer postId={this.props.postId} />);
    }
    render() {
        return (
            <ul className='post-dropdown' >
                <li onClick={this.handleEdit}>Edit Post</li>
                <li onClick={this.handleDelete}>Delete</li>
            </ul>
        );
    }
}
export default PostDropdown;