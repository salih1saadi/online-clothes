import SHOP_DATA from './shop.data';
import { ShopActionTypes } from './shop.types';


const INITIAL_STATE = {
  collections: SHOP_DATA,
  categories:[],
  products:[],

  
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

  	 case ShopActionTypes.SHOW_CATEGORY:
  	 console.log(action)
      return {
      	...state,
        categories: action.payload
      };

   
    case ShopActionTypes.SHOW_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
  
    default:
  
      return state;
  }
};

export default shopReducer;
