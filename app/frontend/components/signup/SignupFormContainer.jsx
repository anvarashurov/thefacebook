import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
})

const mapDispatchToProps = dispatch => {
  return ({
    signup: (user) => dispatch(signup(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);