// import React from 'react';
// import { BrowserRouter as Router, Switch, withRouter, Link, Route, userParams} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { updateUser } from '../../actions/session_actions';

// class About extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: this.props.profileOwner.id,
//             first_name: this.props.profileOwner.first_name,
//             last_name: this.props.profileOwner.last_name,            
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.updateField = this.updateField.bind(this);
//     }

//     updateField(field) {
//         return e => {
//             this.setState({[field]: e.target.value})
//         }
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         return this.props.updateUser(this.state);
//     }

//     render() {
//         return(
//             <div className="about_container">
//                 <div className="about_title_container">
//                     <img src={this.props.profileOwner.profilePhotoUrl} alt="Profile"/>
//                     <p>About</p>
//                 </div>
//                 <div className="about_body_container">
//                     <div className="about_menu">
//                         <Link to={`/users/${this.props.profileOwner.id}/about`}>Overview</Link>
//                         <Link to={`/users/${this.props.profileOwner.id}/about/work`}>Work and Education</Link>
//                         <Link to={`/users/${this.props.profileOwner.id}/about/lived`}>Places You've Lived</Link>
//                     </div>
//                     <div className="menu_content">
//                         <Route exact path={`${this.props.match.url}`} component={Overview} profileOwner={this.props.profileOwner}/>
//                         <Route path={`${this.props.match.url}/work`} component={Workplace} profileOwner={this.props.profileOwner}/>
//                         <Route path={`${this.props.match.url}/lived`} component={Lived} profileOwner={this.props.profileOwner}/>
//                         {/* <Route path={`/users/${this.props.profileOwner.id}/about/edit/`}>
//                             <div className="edit_user">    
//                                 <form onSubmit={this.handleSubmit} className="edit_user">
//                                     <label>First name</label>
//                                     <input type="text" value={this.state.first_name} onChange={this.updateField("first_name")} />
//                                     <label>Last name</label>
//                                     <input type="text" value={this.state.last_name} onChange={this.updateField("last_name")} />
//                                     <input type="submit" value="Save" id="save_button"/>
//                                 </form>
//                             </div>
//                         </Route> */}
//                     </div>
//                 </div>
//             </div>
//         )
//     };
// }

// const Workplace = () => {
//     return (
//         <ul>
//             <li>WORK</li>
//         </ul >
//     )
// }

// function Overview() {
//     return (
//         <ul>
//             <li>WORK </li>
//             <li>COLLEGE </li>
//             <li>HIGH SCHOOL</li>
//             <li>CITY</li>
//             <li>BIRTHDAY</li>
//         </ul>
//     )
// }

// function Lived() {
//     return (
//         <ul>
//             <li>CITY</li>
//             <li>COUNTRY</li>
//         </ul>
//     )
// }
// const msp = (state, ownProps) => {
//     return {
//         profileOwner: ownProps.profileOwner 
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     updateUser: (user) => dispatch(updateUser(user))
// })

// export default withRouter(connect(msp, mapDispatchToProps)(About));