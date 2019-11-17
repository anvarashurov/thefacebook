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
    }

    //  TODO: how to write handleFile funciton for multiple photos

    handleChange(e) {

        e.preventDefault();

        const files = e.currentTarget.files;

        if (files) {
            debugger
            for (let i = 0; i < files.length; i++) {

                const file = files[i];
                const fileReader = new FileReader();

                if (file) {
                    debugger
                    fileReader.readAsDataURL(file);
                    debugger
                }

                const photos = this.state.photos;
                photos.push(file);

                const urls = this.state.urls;
                urls.push(fileReader.result);
                debugger
                this.setState({ photos, urls })

                debugger
            }
        }
        debugger
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const formData = new FormData();
        const allPhotos = this.state.photos;
        for (let i = 0; i < allPhotos.length; i++) {
            debugger
            formData.append('user[photos][]', allPhotos[i]);
        }
        debugger
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
                            onChange={this.handleChange}
                            multiple />
                        <input type="submit" value="Upload" />
                    </form>
                </span>
            </div>
        )
    }
}

export default UploadPhoto;