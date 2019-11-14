import { connect } from 'react-redux';
import { hideDropdown } from '../../actions/dropdowns_actions';
import Dropdown from './dropdown';

const msp = state => {
    debugger
    return {
        component: state.ui.dropdown.component,
        componentId: state.ui.dropdown.componentId,
    };
};

const mdp = dispatch => {
    debugger
    return {
        hideDropdown: () => dispatch(hideDropdown())
    };
};

export default connect(msp, mdp)(Dropdown);