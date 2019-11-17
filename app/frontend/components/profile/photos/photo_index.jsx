import React from 'react';
// import PhotoIndex from './photo_index';

class PhotoIndex extends React.Component {

    constructor(props) {
        debugger
        super(props);
    }

    //  we have access to profileOwner object

    render() {

        let profileOwnerPhotos = this.props.profileOwner.photosUrl
        
        if(profileOwnerPhotos.length !== 0) {
            profileOwnerPhotos.map((photoUrl) => {
                return (
                    // <PhotoIndexItem 
                    //     photo={photo}
                    //     profileOwner={profileOwner}
                    //     />
                    <div class="single_photo">
                        {/* TODO: onclick open modal to show individual photo */}
                        {/* <button> */}
                            <img src={photoUrl} />
                        {/* </button> */}
                    </div>
                )
            })
        }

        debugger
        return (
            <div className="photos_sidebar_container">
                <div className="photos_text">
                    Photos
                    <button onClick={() => this.props.openModal({type: "upload_photos", photos: null})}>
                        Upload Photos
                    </button>
                </div>
                <div className="all_photos_sidebar">
                    {profileOwnerPhotos}
                </div>
            </div>
        );
    }
}

export default PhotoIndex;