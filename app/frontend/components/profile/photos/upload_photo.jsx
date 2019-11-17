import React from 'react';
import {merge} from 'lodash';

class UploadPhoto extends React.Component {

    // we only upload photos 
    // nothing else

    constructor(props) {
        super(props);
        this.state = {
            // we are population array
            // photoFile: null,
            // photoUrl: null,
            photos: null,
            photosArr: this.props.photosArr,
            currentUser: this.props.currentUser,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //  TODO: how to write handleFile funciton for multiple photos

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const formData = new FormData();
        
        let allPhotos = merge({}, this.state.photosArr, this.state.photos);

        for(let i = 0; i < allPhotos.length; i++) {
            formData.append('user[photos][]', allPhotos[i]);
        }
        let currentUser = this.state.currentUser;
        return this.props.updateUser(formData, currentUser).then(() => this.props.closeModal());
    }

    render() {

        return (
            <div id="upload_photo">
                {/* <img src={window.camera} alt="Ph" /> */}
                <span>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="file">Add Photo</label>
                        <input
                            id="file" 
                            style={{ visibility: "hidden" }} 
                            type="file" 
                            onChange={e => this.setState({photos: e.target.files})} 
                            multiple />
                        <input type="submit" value="Upload"/>
                    </form>
                </span>
            </div>
        )
    }
 }

 export default UploadPhoto;