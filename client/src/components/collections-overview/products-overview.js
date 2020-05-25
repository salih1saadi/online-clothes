import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProductsPreview from '../collection-preview/products-preview';
import {  selectProductsForPreview } from '../../redux/shop/shop.selectors';
import { showProducts } from '../../redux/shop/shop.actions';

import './collections-overview.styles.scss';

const ProductsOverview = ({ products }) => (
  <div className='collections-overview'>

       <h1>All Products</h1>
   
      <ProductsPreview key={products._id} products={products} />
      
  
    
    
    
  </div>
);

const mapStateToProps = createStructuredSelector({
  products: selectProductsForPreview
});

export default connect(mapStateToProps, showProducts)(ProductsOverview);