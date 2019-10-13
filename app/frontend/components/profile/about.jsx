import React from 'react';
import { BrowserRouter as Router, Switch, withRouter, Link, Route, userParams} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/session_actions';

class About extends React.Component {

    constructor(props) {
        super(props);
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
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        return this.props.updateUser(this.state);
    }

    render() {
        return(
            <div className="about_container">
                <div className="about_title_container">
                    <img src={window.profile} alt="Profile"/>
                    <p>About</p>
                </div>
                <div className="about_body_container">
                    <div className="about_menu">
                        <Link to={`/users/${this.props.currentUser.id}/about`}>Overview</Link>
                        <Link to={`/users/${this.props.currentUser.id}/about/work`}>Work and Education</Link>
                        <Link to={`/users/${this.props.currentUser.id}/about/lived`}>Places You've Lived</Link>
                        <Link to={`/users/${this.props.currentUser.id}/about/edit`}>Edit Profile</Link>    
                    </div>
                    <div className="menu_content">
                        <Route exact path={`${this.props.match.url}`} component={Overview}/>
                        <Route path={`${this.props.match.url}/work`} component={Workplace}/>
                        <Route path={`${this.props.match.url}/lived`} component={Lived}/>
                        <Route path={`/users/${this.props.currentUser.id}/about/edit/`}>
                            <div className="edit_user">    
                                <form onSubmit={this.handleSubmit} className="edit_user">
                                    <label>First name</label>
                                    <input type="text" value={this.state.first_name} onChange={this.updateField("first_name")} />
                                    <label>Last name</label>
                                    <input type="text" value={this.state.last_name} onChange={this.updateField("last_name")} />
                                    <input type="submit" value="Save" id="save_button"/>
                                </form>
                            </div>
                        </Route>
                    </div>
                </div>
            </div>
        )
    };
}

function Workplace() {
    return (
        <ul>
            <li>WORK</li>
        </ul >
    )
}

function Overview() {
    return (
        <ul>
            <li>WORK </li>
            <li>COLLEGE </li>
            <li>HIGH SCHOOL</li>
            <li>CITY</li>
            <li>BIRTHDAY</li>
        </ul>
    )
}

function Lived() {
    return (
        <ul>
            <li>CITY</li>
            <li>COUNTRY</li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user))
})

export default withRouter(connect(null, mapDispatchToProps)(About));