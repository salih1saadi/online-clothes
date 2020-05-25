import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { addProduct } from '../../../redux/shop/shop.actions';
import { addCategory } from '../../../redux/shop/shop.actions';
import {  Route, Switch } from 'react-router-dom';
import {  MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SideNav from '../components/side-nav/side-nav';
import Category from '../components/category/category';
import AddProduct from '../components/add-product/add-product';
import Products from '../components/products/products';
import Users from '../components/users/users';
import Orders from '../components/orders/orders';



class Admin extends React.Component { 



  render(){

    const {addProduct,addCategory ,addFlashMessage, match} = this.props;

return(


  <MDBContainer >
  
  <MDBRow >
  
    <MDBCol   md="2">
     <SideNav />
    </MDBCol>
    <MDBCol md="10"><div>

    <div>
    <Switch>

    <Route exact  path={`${match.path}/categories`}  component={()=><Category addCategory={addCategory}/>} />
    <Route exact  path={`${match.path}/add-product`} component={()=><AddProduct addProduct={addProduct} addFlashMessage={addFlashMessage}/>} />
    <Route exact  path={`${match.path}/products`} component={Products} />
    <Route exact  path={`${match.path}/orders`} component={Orders} />
    <Route exact  path={`${match.path}/users`} component={Users} />

    </Switch>
  
    </div>
    
    </div>

    </MDBCol>

  </MDBRow>
</MDBContainer>



  
);

  }
}


Admin.propTypes = {

 addCategory: PropTypes.func.isRequired,
 addProduct: PropTypes.func.isRequired,
 addFlashMessage: PropTypes.func,
};

export default connect(null,{addCategory,addProduct})(Admin);