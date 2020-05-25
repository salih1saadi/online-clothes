import React from "react";
import { MDBIcon, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { MDBRow, MDBCol } from "mdbreact";


const SideNav =  ({ match }) => (





  <MDBRow>
    
    <MDBCol  md="12">


    <MDBNav  className="flex-column border-right border-light w-20" >
      <MDBNavItem>

        <MDBNavLink className="black-text" active to="/admin/"><span><MDBIcon icon="cog" /></span> Dashboard</MDBNavLink>
      </MDBNavItem>

      <MDBNavItem>
        <MDBNavLink className="black-text" to="/admin/products"><span><MDBIcon icon="clipboard-list" /></span> View Products</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="black-text" to="/admin/add-product"><span><MDBIcon icon="plus-square" /></span> Add Product</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="black-text" to="/admin/categories"><span><MDBIcon icon="list" /></span> Categories</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink disabled className="black-text" to="/admin/orders"><span><MDBIcon icon="clipboard-list" /></span> Orders</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink disabled  className="black-text" to="/admin/users"><span><MDBIcon icon="user" /></span> Users</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink  disabled to="#!">Disabled</MDBNavLink>
      </MDBNavItem>
    </MDBNav>

  </MDBCol>
  
  </MDBRow>


  
);

export default SideNav;