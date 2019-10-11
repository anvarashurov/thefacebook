import React from 'react';

//({ currentUser })

class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {content: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleSubmit(e) {
        // debugger
        // e.preventDefault();
        return this.props.createPost(this.state);
    }

    handleChange() {
        // debugger
        return e => {
            this.setState({content: e.target.value});
        };
    }

    render() {
        return (
            <div className="create_post_container">
                <ul className="top_part">
                    <li>
                        <img src={window.createPostPen} alt="PEN"id="pen"/>
                        <span id="pen_text">
                            {/* <a href="#">
                                Create Post
                            </a>  */}
                            <input type="submit" value="Create Post" onClick={this.handleSubmit} /> 
                        </span> 
                    </li>
                    {/* <li id="second">
                        <img src={window.camera} alt="Ph"/>
                        <span>
                            <a href="#">
                            Photo/Video
                            </a>
                        </span> 
                    </li> */}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <div className="create_post_area">
                        <img src={window.profile} alt="P" style={{ width: '60px', height: '60px' }}/>
                        <textarea onChange={this.handleChange()} value={this.state.content} placeholder="What's on your mind?"></textarea>
                    </div>
                    <input id="create_post_button" type="submit" value="Post"/>
                </form>
            </div>
        )
    }
}

export default CreatePost;