import React from 'react';
import { create } from 'domain';
// import {withRouter} from 'react-router-dom';

class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            content: "",
            photoFile: null,
            photoUrl: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);       
    }

    handleFile(e) {
        e.preventDefault();
        // e.stopPropagation();
        
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        
        // The readAsDataURL method is used to read the contents of the specified Blob or File.When the read operation is finished, the readyState becomes DONE, and the loadend is triggered.At that time, 
        // the result attribute contains the data as a data: URL representing the file's data as a base64 encoded string.

        if (file) {
            fileReader.readAsDataURL(file);
        }

        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[content]', this.state.content);
        // reeiverId is 0 meaning this post was made on their own wall.
        if(this.props.profileOwner.id === this.props.currentUser.id) {
            formData.append('post[receiver_id]', this.props.currentUser.id)    
        } else {
            formData.append('post[receiver_id]', this.props.profileOwner.id)                
        }
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        return this.props.createPost(formData).then(() => this.props.closeModal());
    }

    handleChange() {
        // debugger
        return e => {
            this.setState({content: e.target.value});
        };
    }

    clearForm() {
        this.setState({ content: '' });
    }

    render() {

        let createPostImg;
        
        if(this.state.photoUrl !== null) {
            
            createPostImg = (
                <div className="create_post_img">
                    <img src={this.state.photoUrl} />
                </div>
            )
        } else {
            createPostImg = null;
        }

        let placeholderText;

        if(this.props.profileOwner.id !== this.props.currentUser.id) {
            placeholderText = `Let's post something on ${this.props.profileOwner.first_name}'s wall :)`;
        } else {
            placeholderText = `What's on your mind, ${this.props.currentUser.first_name}?`;
        }

        // NEVER move the Component. Always wrap it around DIV / DIV so you can move DIV
        // thus reusing the CSS!

        return (
            <div className="create_post_container">
                <form onSubmit={this.handleSubmit}>
                    <ul className="top_part">
                        <li>
                            <img src={window.createPostPen} alt="PEN"id="pen"/>
                            <span id="pen_text">
                                <input type="submit" value="Create Post" onClick={this.handleSubmit} /> 
                            </span> 
                        </li>
                        <li id="second">
                            <img src={window.camera} alt="Ph"/>
                            <span>
                                <label htmlFor="file">Add Photo</label>
                                <input id="file" style={{visibility: "hidden"}} type="file" onChange={this.handleFile} /> 
                            </span>
                        </li>
                    </ul>
                        <div className="create_post_area">
                            <img src={this.props.currentUser.profilePhotoUrl} alt="P" style={{ width: '60px', height: '60px' }}/>
                            {/* TODO: Each click is OPEN MODAL. FIX IT. */}
                            <textarea onChange={this.handleChange()} value={this.state.content} placeholder={placeholderText} onClick={() => this.props.openModal({type: "create_post", post: null})}></textarea>
                        </div>
                        <input id="create_post_button" type="submit" value="Post"/>
                        
                        {/* TODO: Work on Displaying Image before posting */}
                        {/* {createPostImg} */}
                </form>
            </div>
        )
    }
}

export default CreatePost;