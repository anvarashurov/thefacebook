import React from 'react';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            id: this.props.currentUser.id,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            bio: this.props.currentUser.bio,
            current_city: this.props.currentUser.current_city,
            workplace: this.props.currentUser.workplace,
            school: this.props.currentUser.school,
            hometown: this.props.currentUser.hometown,
            rel_status: this.props.currentUser.rel_status,

            profilePhoto: null,
            coverPhoto: null,
            profilePhotoUrl: this.props.currentUser.profilePhotoUrl,
            coverPhotoUrl: this.props.currentUser.coverPhotoUrl,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
        this.handleProfileFile = this.handleProfileFile.bind(this);
        this.handleCoverFile = this.handleCoverFile.bind(this);       
    }

    updateField(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    // Updates state with the file grabbed from user input
    handleProfileFile(e) {
        // e.preventDefault();
        // this.setState({photoFile: e.currentTarget.files[0]})
        debugger

        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        // The readAsDataURL method is used to read the contents of the specified Blob or File.When the read operation is finished, the readyState becomes DONE, and the loadend is triggered.At that time, 
        // the result attribute contains the data as a data: URL representing the file's data as a base64 encoded string.

        if (file) {
            fileReader.readAsDataURL(file);
        }

        fileReader.onloadend = () => {
            this.setState({ profilePhoto: file, profilePhotoUrl: fileReader.result });
        };

    }

    // Updates state with the file grabbed from user input
    handleCoverFile(e) {
        // e.preventDefault();
        // this.setState({photoFile: e.currentTarget.files[0]})
        debugger

        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        // The readAsDataURL method is used to read the contents of the specified Blob or File.When the read operation is finished, the readyState becomes DONE, and the loadend is triggered.At that time, 
        // the result attribute contains the data as a data: URL representing the file's data as a base64 encoded string.

        if (file) {
            fileReader.readAsDataURL(file);
        }

        fileReader.onloadend = () => {
            this.setState({ coverPhoto: file, coverPhotoUrl: fileReader.result });
        };

    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     return this.props.updateUser(this.state);
    // }

    handleSubmit(e) {

        debugger

        e.preventDefault();

        const formData = new FormData();
        // formData.append('user[profilePhotoUrl]', this.state.profilePhotoUrl);
        if (this.state.profilePhoto) {
            formData.append('user[profilePhoto]', this.state.profilePhoto);
        }
        if (this.state.coverPhoto) {
            formData.append('user[coverPhoto]', this.state.coverPhoto);
        }
        formData.append('user[first_name]', this.state.first_name);
        formData.append('user[last_name]', this.state.last_name);
        formData.append('user[current_city]', this.state.current_city);
        formData.append('user[workplace]', this.state.workplace);
        formData.append('user[hometown]', this.state.hometown);
        formData.append('user[rel_status]', this.state.rel_status);
        formData.append('user[school]', this.state.school);

        // formData.append('user[bio]', this.state.bio);
        // formData.append('user[bio]', this.state.bio);
        // this.props.action(formData).then(() => this.clearForm());
        // formData.append('post[photo]', this.state.photoFile);
        // debugger
        this.props.closeModal();
        return this.props.updateUser(formData, currentUser);
        // .then(() => this.clearForm());
    }

    render() {
        debugger
        return (
            // <div className="edit-profile-container">
            //     <div className="upload-wallpaper-container">
            //         <p>Hi there</p>
            //     </div>
            //     <div className="upload-profile-picture-container">
            //         <p> Hello buddy </p>
            //     </div>
            // </div>
            <form onSubmit={this.handleSubmit} className="edit_user_form">
                <div className="edit_profile_container_modal">
                    <span className="edit_profile_text_modal"> Edit Profile </span>
                    <button className="edit_profile_button_modal" onClick={this.props.closeModal}>&#10006;</button>
                </div>
                <div className="photos_container_modal">
                    <div className="cover_photo_container">
                        <div className="camera_icon_container" role="button">

                            <label htmlFor="file1">
                                <img className="camera1" src={window.camera}/>
                            </label>
                            <input id="file1" type="file" onChange={this.handleCoverFile} />

                        </div>
                        <img className="cover_photo_modal" src={this.state.coverPhotoUrl} alt=""/>
                    </div>
                    <div className="profile_photo_container">
                        <div className="camera_icon_container" role="button">

                            <label htmlFor="file2">
                                <img className="camera2" src={window.camera} alt=""/>
                            </label>
                            <input id="file2" type="file" onChange={this.handleProfileFile} />
    
                        </div>
                        <img className="profile_photo_modal" src={this.state.profilePhotoUrl} alt=""/>
                    </div>
                </div>
                <div className="edit_name_container">
                    <div className="edit_name_text">    
                        Edit Name
                    </div>
                    <div className="edit_names">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>First name</label>
                                    </td>
                                    <td>
                                        <input type="text" value={this.state.first_name} onChange={this.updateField("first_name")} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Last name</label>
                                    </td>
                                    <td>
                                        <input type="text" value={this.state.last_name} onChange={this.updateField("last_name")} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="name_border"></div>
                    </div>
                </div>
                <div className="edit_bio_container">

                    <div className="edit_bio_text"> Edit Bio </div>
                    <input type="text" value={this.state.bio} onChange={this.updateField("bio")} maxLength="101"/>
                    

                    <div className="edit_other_info">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Current City</label>
                                    </td>
                                    <td>
                                        <input type="text" value={this.state.current_city} onChange={this.updateField("current_city")} />
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td>
                                        <label>Workplace</label>
                                    </td>
                                    <td>
                                        <input type="text" value={this.state.workplace} onChange={this.updateField("workplace")} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>School</label>
                                    </td>
                                    <td>
                                        <input type="text" value={this.state.school} onChange={this.updateField("school")} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Hometown</label>
                                    </td>
                                    <td>
                                        <input type="text" value={this.state.hometown} onChange={this.updateField("hometown")} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Relationship Status</label>
                                    </td>
                                    <td>
                                        <input type="text" value={this.state.rel_status} onChange={this.updateField("rel_status")} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="name_border">
                    </div>
                </div>
                <input type="submit" value="Save" id="save_button" onClick={this.props.handleSubmit} />                
            </form>
        )
    }

}

export default EditProfile;