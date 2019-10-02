import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/sessions_actions';

const _nullUser = Object.freeze({
  id: null
})

const sessionReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, action.user);
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default: 
      return state;
  }
}

export default sessionReducer;