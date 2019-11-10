import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import dropdownsReducer from './dropdowns_reducer';

const ui = combineReducers({
    modal: modalReducer,
    dropdown: dropdownsReducer,
});

export default ui;