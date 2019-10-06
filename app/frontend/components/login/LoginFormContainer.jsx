import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return { errors: state.errors.session }
}

const mapDispatchToProps = dispatch => {
  return ({
    login: (user) => dispatch(login(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);