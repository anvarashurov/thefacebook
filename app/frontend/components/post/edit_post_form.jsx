import React from 'react';

class EditPostForm extends React.Component {
    constructor(props) {
        debugger
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.state = this.props.post;
    }

    update(e) {
        this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.closeModal());
    }

    handleExit(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    render() {

        debugger

        return (
            <div className='edit-post-form-wrapper'>
                <form className='content-item form' onSubmit={this.handleSubmit}>
                    <header className='edit-post-form-header'>
                        <div className='edit-post-form-header-content'>
                            <span>{this.props.headerText} Post</span>
                            <button className='post-edit-form-x' onClick={this.handleExit}>×</button>
                        </div>
                    </header>
                    <div className='post-form-body'>
                        <div className='post-form-minipic'>
                            <img src={this.state.authorPicUrl} />
                        </div>
                        <textarea
                            className='post-form-input'
                            value={this.state.body}
                            onChange={this.update}
                            placeholder="What's on your mind?"
                        />
                    </div>
                    <footer className='post-form-footer'>
                        <div className='post-form-footer-content'>
                            <input
                                className='post-form-button blue-button'
                                type='submit' value={this.props.submitText}
                                disabled={/\S/.test(this.state.body) ? false : true}
                            />
                        </div>
                    </footer>
                </form>
            </div>
        );
    }
}
export default EditPostForm;