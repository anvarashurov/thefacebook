import React from 'react';
import { BrowserRouter, Switch, withRouter, Link, Route, userParams} from 'react-router-dom';

class About extends React.Component {

    render() {
        debugger
        return(
            <div className="about_container">
                <div className="about_title_container">
                    <img src={window.profile} alt="Profile"/>
                    <p>About</p>
                </div>
                <div className="about_body_container">
                    <BrowserRouter>
                    <div className="about_menu">
                        <Link to={`/users/${this.props.currentUser.id}/about`}>Overview</Link>
                        <Link to={`/users/${this.props.currentUser.id}/about/work`}>Work and Education</Link>
                        <Link to={`/users/${this.props.currentUser.id}/about/lived`}>Places You've Lived</Link>
                        {/* When user clicks one of the above, 
                            the appropriate section on the right side 
                            need to be updated
                        */}
                        
                    </div>
                    <div className="menu_content">
                        <Switch>
                            <Route exact path={`/users/${this.props.currentUser.id}/about`} children={<Overview/>}/>
                            <Route exact path={`/users/${this.props.currentUser.id}/about/work/`} children={<Workplace/>}/>
                            <Route exact path={`/users/${this.props.currentUser.id}/about/lived/`} children={<Lived />}/>
                        </Switch>
                    </div>
                    </BrowserRouter>
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
export default withRouter(About);