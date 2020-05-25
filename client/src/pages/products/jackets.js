import React from 'react';
import { connect } from 'react-redux';
import { showProducts} from '../../redux/shop/shop.actions';
import ProductsItem from '../../components/collection-item/products-item';
import './products.styles.scss';

const Jackets = ({ products }) => {

  return (
    <div className='collection-page'>
      <h2 className='title'>Jackets</h2>
      <div className='items'>
        {products.filter(product => product.category.routeName === "jackets" )
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

export default connect(mapStateToProps, showProducts )(Jackets);