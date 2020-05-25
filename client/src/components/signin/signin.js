import React from 'react';
import './signin.styles.scss';
import PropTypes from 'prop-types';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { withRouter } from "react-router-dom";
import {  MDBAlert } from 'mdbreact'; 

class SignIn extends React.Component {

constructor(props){

super(props);

this.state ={

email:'',
password:'',
errors: {}

   };

  }

handleSubmit = event => {

event.preventDefault();

this.setState({email:'', password:''})

}

handleChange = event =>{

const { value, name} = event.target;
this.setState({ [name]:value} );

}

onSubmit = (e)=>{

   e.preventDefault();
   this.setState({errors: {} });
   this.props.userLogin(this.state).then(
    ()=>{
       
     this.props.addFlashMessage({
      type:'success',
      text: 'You signed in successfully. welcome!'
     })  
     
   this.props.history.push('/');
    
    } ,( data ) => {

    this.setState({errors: data.response.data ||  data })
 }
    );
    


  }
  

  render(){
const { errors, email, password } = this.state;
  	return(
     
     <div className='sign-in'>
     <h2>I already have an account</h2>
     <span>Sign in with your email and password</span>

     <form onSubmit={this.onSubmit}>
     {errors.error && <MDBAlert color="danger">{errors.error}</MDBAlert>}
     <FormInput label='email' handleChange={this.handleChange} name="email" type="email" value={this.state.email} />
     {errors.email && <MDBAlert color="danger">{errors.email}</MDBAlert>}
     
     <FormInput label='password' handleChange={this.handleChange} name="password" type="password" value={this.state.password} />
     {errors.password && <MDBAlert color="danger">{errors.password}</MDBAlert>}
     
     <CustomButton type='submit' >Sign in</CustomButton>
     </form>
     </div>

  	)
  }
}

SignIn.propTypes = {
 
 userLogin: PropTypes.func.isRequired,
 addFlashMessage: PropTypes.func.isRequired,
};

export default withRouter(SignIn);

