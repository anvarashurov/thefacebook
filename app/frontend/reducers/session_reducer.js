import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
})

const sessionReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {currentUserId: action.user.id});
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default: 
      return state;
  }
}

export default sessionReducer;