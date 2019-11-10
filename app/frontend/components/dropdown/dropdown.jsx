// import PostDropdownContainer from '../post/post_dropdown_container';

// import onClickOutside from "react-onclickoutside";

import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.renderDropdown = this.renderDropdown.bind(this);
    }

    handleClickOutside() {
        this.props.hideDropdown();
    }

    renderDropdown() {
        switch(this.props.component) {
            // case 'post':
                // return <PostDropdownContainer postId = {this.props.componentId} />;
            default: 
                return null;
        }
    }

    render() {
        return (
            <div className="dropdown">
                {  
                    this.renderDropdown() 
                }
            </div>
        )
    }
}

export default Dropdown;