import React from 'react';
import ProductsOverview from '../../components/collections-overview/products-overview';
import { Route } from 'react-router-dom';
import Hats from '../products/hats';
import Sneakers from '../products/sneakers';
import Jackets from '../products/jackets';
import Womens from '../products/womens';
import Mens from '../products/mens';





const ShopProduct = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={ProductsOverview} />
    <Route exact path={`${match.path}/hats`} component={Hats} />
    <Route exact path={`${match.path}/sneakers`} component={Sneakers} />
    <Route exact path={`${match.path}/jackets`} component={Jackets} />
    <Route exact path={`${match.path}/womens`} component={Womens} />
    <Route exact path={`${match.path}/mens`} component={Mens} />
    
    
  </div>
);

export default ShopProduct;