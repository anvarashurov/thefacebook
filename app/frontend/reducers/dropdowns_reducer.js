import { SHOW_DROPDOWN, HIDE_DROPDOWN } from '../actions/dropdowns_actions';

const defaultState = {
    component: null,
    componentId: null, 
    displayed: false
};

const dropdownsReducer = (state = defaultState, action) => {
    debugger
    Object.freeze(state);
    switch(action.type) {
        case SHOW_DROPDOWN:
            debugger
            return { 
                component: action.component, componentId: action.componentId, displayed: true
            }
        case HIDE_DROPDOWN:
            debugger
            return defaultState;
        default:
            debugger
            return state;
    }
};

export default dropdownsReducer;