import React from 'react';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            id: this.props.currentUser.id,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    updateField(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        return this.props.updateUser(this.state);
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