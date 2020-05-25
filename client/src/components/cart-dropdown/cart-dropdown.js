import React from 'react';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?(
      	cartItems.map(cartItem => (
        <CartItem key={cartItem._id} item={cartItem} />
      ))

      	):(
          
          <span className='empty-message'>Your cart is empty</span>

      	)

      }
    </div>
     <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));