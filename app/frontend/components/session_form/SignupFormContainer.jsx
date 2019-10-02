import { signup } from '../../util/session_api_util';
import { connect } from 'react-redux';
import SessionForm from './SessionForm';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: "signup",
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (user) => dispatch(signup(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)