import React from 'react';
import { connect } from 'react-redux';
import { showProducts} from '../../redux/shop/shop.actions';
import ProductsItem from '../../components/collection-item/products-item';
import './products.styles.scss';

const Hats = ({ products }) => {

  return (
    <div className='collection-page'>
      <h2 className='title'>Hats</h2>
      <div className='items'>
        {products.filter(product => product.category.routeName === "hats" )
          .map(item => (
          <ProductsItem key={item.id} item={item} />
        ))}
        
      
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps, showProducts )(Hats);