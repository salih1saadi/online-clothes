import { UserActionTypes } from './user.types';
import isEmpty from 'lodash/isEmpty';



const INITIAL_STATE = {

  isAuthenticated: false,
  user: {}
};

const authReducer = (state = INITIAL_STATE, action ={}) => {
  switch(action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default: return state;
  }
};

export default authReducer;