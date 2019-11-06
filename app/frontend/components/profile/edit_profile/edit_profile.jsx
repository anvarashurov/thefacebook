import React from 'react';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            id: this.props.currentUser.id,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            profilePhoto: null,
            coverPhoto: null,
            profilePhotoUrl: null,
            coverPhotoUrl: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
        this.handleFile = this.handleFile.bind(this);       
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
        // this.props.action(formData).then(() => this.clearForm());
        // formData.append('post[photo]', this.state.photoFile);
        // debugger
        return this.props.updateUser(formData).then(() => this.clearForm());
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
                <label>First name</label>
                <input type="text" value={this.state.first_name} onChange={this.updateField("first_name")} />
                <label>Last name</label>
                <input type="text" value={this.state.last_name} onChange={this.updateField("last_name")} />
                <input type="submit" value="Save" id="save_button" />
            </form>
        )
    }

}

export default EditProfile;