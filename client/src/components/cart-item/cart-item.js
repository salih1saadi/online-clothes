import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { file, price, name, quantity } }) => (
  <div className='cart-item'>
    <img className='img' src=  {'/assets/' + `${file}` ||  `${file}`}  className="image" />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;