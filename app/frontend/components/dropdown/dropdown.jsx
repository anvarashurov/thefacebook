// import PostDropdownContainer from '../post/post_dropdown_container';

// import onClickOutside from "react-onclickoutside";
import LogoutContainer from './logout_container';
import PendingFriendContainer from '../profile/friend/pending_friend_container';

import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        // this.renderDropdown = this.renderDropdown.bind(this);
    }

    // TODO BUG
    handleClickOutside() {
        this.props.hideDropdown();
    }

    render() {

        let component;
        
        switch (this.props.component) {
            case 'logout':
                // debugger
                component = (
                    <div className="logout_dropdown">
                        <LogoutContainer />
                    </div>)
                break;
            case 'friend':
                // debugger
                component = (
                    <div className="friend_dropdown">
                        <PendingFriendContainer currentUser={this.props.componentId}/>
                    </div>
                )
                break;
            // case comment .. now? haha
            // TODO : Add drop down for post options
            // case 'post_options':

            default:
                // debugger
                component = null;
                break;
        }
  
        return (
            <>
                {component}
            </>
        )
    }
}

export default Dropdown;