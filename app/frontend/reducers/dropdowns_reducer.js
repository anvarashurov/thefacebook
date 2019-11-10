import { SHOW_DROPDOWN, HIDE_DROPDOWN } from '../actions/dropdowns_actions';

const defaultState = {
    component: null,
    componentId: null, 
    displayed: false
};

const dropdownsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case SHOW_DROPDOWN:
            return { 
                component: action.component, componentId: action.componentId, displayed: true
            }
        case HIDE_DROPDOWN:
            return defaultState;
        default:
            return state;
    }
};

export default dropdownsReducer;