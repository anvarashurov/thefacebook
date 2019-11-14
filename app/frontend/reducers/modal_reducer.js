import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
    debugger
    switch (action.type) {
        case OPEN_MODAL:
            debugger
            return action.modal;
        case CLOSE_MODAL:
            debugger
            return null;
        default:
            debugger
            return state;
    }
}