import React from 'react';
import'./collection-preview.styles.scss';
import ProductsItem from '../collection-item/products-item'



const ProductsPreview = ({ products }) => (
  <div className='collection-preview'>
    <h1 className='title'></h1>
    <div className='preview'>

    {products
      .map(item => (
          <ProductsItem key={item._id} item={item}  />
        ))}
      
    </div>
  </div>
);

export default ProductsPreview;