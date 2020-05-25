
import {ADD_FLASH_MESSAGE} from './flash.types';
import shortid from 'shortid';


const flashMessage = (state =[], action = {})=>{
	switch(action.type){
   case ADD_FLASH_MESSAGE:
   return [ ...state,
   {   
   	  id: shortid.generate(),
      type: action.message.type,
      text: action.message.text

   }

   ];

   return state;

   default: return state;

	}
}

export default flashMessage;