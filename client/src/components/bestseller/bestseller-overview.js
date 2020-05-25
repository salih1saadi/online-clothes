import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Bestseller from './bestseller';
import { selectCollectionsForPreview,selectProducts } from '../../redux/shop/shop.selectors';
import { showProducts } from '../../redux/shop/shop.actions';



const BestsellerOverview = ({ products }) => (
  <div className='collections-overview'>
 

    	{products.filter((item, idx) => idx < 1)
          .map(item => (
          <Bestseller key={item._id} item={item} products={products} />
        ))}
    
    
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  products: selectProducts
});



export default connect(mapStateToProps, showProducts)(BestsellerOverview);