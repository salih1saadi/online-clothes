import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import PropTypes from 'prop-types';
import './sign-up.styles.scss';
import { withRouter } from "react-router-dom";
import {  MDBAlert } from 'mdbreact'; 


class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors:{}
    }
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit = e =>{
     
   e.preventDefault();
   
   this.setState({errors: {} });
   this.props.userSignupRequest(this.state).then(
    ()=>{
       
     this.props.addFlashMessage({
      type:'success',
      text: 'You signed up successfully. welcome!'
     })  
     this.props.history.push('/');
   
    
    } ,( data ) => {

   this.setState({errors: data.response.data ||  data })
 }
    );
    
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.onSubmit}>
          <div>
          <FormInput
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            label='Display Name'
            
          />
        {errors.username && <MDBAlert color="danger">{errors.username}</MDBAlert>}
       </div>
       
          {errors.error && <MDBAlert color="danger">{errors.error}</MDBAlert>}
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            label='Email'
            
          />
        
        {errors.email && <MDBAlert color="danger">{errors.email}</MDBAlert>}
  
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='Password'
            
          />
          {errors.password && <MDBAlert color="danger">{errors.password}</MDBAlert>}
          <FormInput
            type='password'
            name='passwordConfirmation'
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
            label='Confirm Password'
            
          />
          {errors.passwordConfirmation && <MDBAlert color="danger">{errors.passwordConfirmation}</MDBAlert>}
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
 
 userSignupRequest: PropTypes.func.isRequired,
 addFlashMessage: PropTypes.func.isRequired,
};



export default withRouter(SignUp);