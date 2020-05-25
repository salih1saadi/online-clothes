import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SignIn from '../../components/signin/signin';
import SignUp from '../../components/sign-up/sign-up';
import '../sign-up-in/sign-up-in.styles.scss';
import { userSignupRequest } from '../../redux/user/user.actions';
import { userLogin} from '../../redux/user/user.actions';
import { addFlashMessage } from '../../redux/flash-msg/flash.actions';




class SignInSignUp extends React.Component {


render(){
		const {userLogin, userSignupRequest ,addFlashMessage} = this.props;
return(
<div className='sign-in-and-sign-up'>
<SignIn userLogin={userLogin} addFlashMessage={addFlashMessage}/>
<SignUp addFlashMessage={addFlashMessage} userSignupRequest={userSignupRequest}/>
</div>


	);
  }

}

SignInSignUp.propTypes = {
  userLogin: PropTypes.func.isRequired,
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};



export default connect(null,{ addFlashMessage, userSignupRequest, userLogin})(SignInSignUp);


