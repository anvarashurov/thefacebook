import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

const mapStateToProps = (state, ownProps) => {
  // debugger
  // this is sending an array
  if(typeof state.errors.session.responseJSON !== 'undefined') {
    return { 
      errors: Object.values(state.errors.session.responseJSON),
      // formType="signin"      
    }
  } else {
    //this is sending an array
    return { errors: Object.values(state.errors.session) }
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    login: (user) => dispatch(login(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);