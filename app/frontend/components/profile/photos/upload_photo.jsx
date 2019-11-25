import React from 'react';
import { merge } from 'lodash';

class UploadPhoto extends React.Component {

    // we only upload photos 
    // nothing else

    constructor(props) {
        super(props);
        this.state = {
            // we are population array
            // photoFile: null,
            // photoUrl: null,
            photos: [],
            urls: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }

    //  TODO: how to write handleFile funciton for multiple photos

    handleChange(e) {

        e.preventDefault();

        const files = e.currentTarget.files;

        if (files) {
            // 
            for (let i = 0; i < files.length; i++) {

                const file = files[i];
                const fileReader = new FileReader();

                if (file) {
                    // 
                    fileReader.readAsDataURL(file);
                    // 
                }

                const photos = this.state.photos;
                photos.push(file);
                
                const urls = this.state.urls;
                fileReader.onloadend = () => {
                    urls.push(fileReader.result);
                    this.setState({ photos, urls });
                };
                
            }
        }
        // 
    }

    handleExit(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    handleSubmit(e) {
        // 
        e.preventDefault();
        const formData = new FormData();
        const allPhotos = this.state.photos;
        for (let i = 0; i < allPhotos.length; i++) {
            // 
            formData.append('user[photos][]', allPhotos[i]);
        }
        // 
        // let currentUser = this.state.currentUser;
        // push history to new location
        return this.props.updateUser(formData, this.props.currentUser).then(() => { 
            this.props.closeModal()
            this.props.history.push(`/users/${this.props.currentUser.id}/photos`)
        })
    }

    render() {
        
        const multiplePhotos = this.state.urls.map((url, idx) => {
            
            return (
            <div key={idx} className="single_photo_preview">
                {/* <button onClick={() => this.props.openModal({ type: 'view_image', imageUrl: url })}> */}
                    <img src={url} alt=""/>
                {/* </button> */}
            </div>
            )
        })
        
        return (
            <div className="upload_photo">
                <form onSubmit={this.handleSubmit}>
                    {/* X */}
                    <div>
                        <span>
                            Upload Photos
                        </span>
                        <button onClick={this.handleExit}>
                            &#10006;
                        </button>
                    </div>
                    {/* Add Photo Button */}
                    <label htmlFor="file">
                        <span>
                            Add Photo
                        </span>
                    </label>
                    <input
                        id="file"
                        style={{ visibility: "hidden" }}
                        type="file"
                        onChange={this.handleChange}
                        multiple 
                    />
                    {/* Upload Photos Button */}
                    <input id="upload_photo_button" type="submit" value="Upload" />
                </form>
                <div className="preview_photo_upload">
                    {multiplePhotos}
                </div>
            </div>
        )
    }
}

export default UploadPhoto;