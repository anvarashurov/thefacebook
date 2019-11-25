import LogoutContainer from './logout_container';
import PendingFriendContainer from '../profile/friend/pending_friend_container';

import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    // TODO BUG
    handleClickOutside() {
        this.props.hideDropdown();
    }

    render() {

        let component;
        
        switch (this.props.component) {
            case 'logout':
                component = (
                    <div className="logout_dropdown">
                        <LogoutContainer />
                    </div>)
                break;
            case 'friend':
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