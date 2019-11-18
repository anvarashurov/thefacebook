import React from 'react';

const ViewImage = ({imageUrl, closeModal}) => {
    debugger
    return (
        <div className="view_image">
            <button onClick={closeModal}>
                &#10006;
            </button>
            <img src={imageUrl} alt="IMAGE GOES HERE :D "/>
        </div>
    )
}

export default ViewImage;