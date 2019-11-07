import { signup } from '../../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => {
  // this is sending an array
  if (typeof state.errors.session.responseJSON !== 'undefined') {
    return { errors: Object.values(state.errors.session.responseJSON) }
  } else {
    //this is sending an array
    return { errors: Object.values(state.errors.session) }
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    signup: (user) => dispatch(signup(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);