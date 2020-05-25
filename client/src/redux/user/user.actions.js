import { UserActionTypes } from './user.types';
import axios from 'axios';
import setAuthorizationToken from './auth';
import jwt from 'jsonwebtoken';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  user
});

export function userSignupRequest(userData) {
	return dispatch =>{
    return axios.post(`https://hidden-bayou-19736.herokuapp.com/users/register`, userData)
        
}

}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}
  


export function userLogin(userData) {
	return dispatch =>{
    return axios.post(`https://hidden-bayou-19736.herokuapp.com/users/login`, userData).then(res =>{
    	const token = res.data.token;
    	localStorage.setItem('jwtToken', token);
    	setAuthorizationToken(token);
    	dispatch(setCurrentUser(jwt.decode(token)));
    });
        
  }
  
}


