import React from 'react';
// import PhotoIndex from './photo_index';
import {Link} from 'react-router-dom';

class PhotoIndex extends React.Component {

    constructor(props) {
        // debugger
        super(props);
    }

    //  we have access to profileOwner object

    render() {

        let profileOwnerPhotos = this.props.profileOwner.photosUrl
        let fotos;
        let tinyPic = null;
        if(this.props.onlyNine) {
            profileOwnerPhotos = profileOwnerPhotos.slice(0, this.props.onlyNine);
        }
        if(profileOwnerPhotos.length !== 0) {
            fotos = profileOwnerPhotos.map((photoUrl, idx) => {
                // debugger
                return (
                    <div className="single_photo" key={idx}>
                        {/* TODO: onclick open modal to show individual photo */}
                        <button onClick={() => this.props.openModal( {type: 'view_image', imageUrl: photoUrl} ) }>
                            <img src={photoUrl} />
                        </button>
                    </div>
                )
            })
        }

        let uploadPhotos = null;

        if(this.props.profileOwner.id === this.props.currentUser.id) {
            uploadPhotos = "Upload Photos";
        }

        // debugger
        return (
            <div className="photos_sidebar_container">
                <div className="photos_text">
                    {/* <img src={window.camera} style={{height: '24px', width: '24px'}}/> */}
                    
                    <Link to={`/users/${this.props.profileOwner.id}/photos`}>Photos</Link> 
                    <button onClick={() => this.props.openModal({type: "upload_photos", photos: null})}>
                        {uploadPhotos}
                    </button>
                </div>
                <div className="all_photos_sidebar">
                    {/* single_photo */}
                    {fotos}
                </div>
            </div>
        );
    }
}

export default PhotoIndex;