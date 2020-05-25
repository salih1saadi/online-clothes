import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';


const ProductsItem = ({ item, addItem }) => {


  return (
    <div className='collection-item'>
      <div
        className='image'
        
      ><img alt='pro' className='img' src=  {'/assets/' + `${item.file}`}  className="image" style={{width: "100%"}}/></div>
      <div className='collection-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price} $</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductsItem);