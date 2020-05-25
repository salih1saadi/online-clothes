import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { showProducts ,removeProduct} from '../../../../redux/shop/shop.actions';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Products = ({ products }) => {

  return (
    <Fragment>
      <h1>All Products</h1>
      
    
    <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>Products</th>
          <th>Image</th>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>

          
        </tr>
      </MDBTableHead>
      <MDBTableBody>

      { products.map(item =>{

        return(

        <tr key = {item._id} item={item} >
          <td><img src=  {'/assets/' + `${item.file}` ||  `${item.file}`}  className="img-thumbnail" style={{width: "100px"}}/></td>
          <td>{item.file}</td>
          <td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.category.title}</td>
          <td>{item.price}</td>
          <td><button type="button" className="close" aria-label="Close">
  <span onClick={removeProduct(item._id)}><i className="far fa-trash-alt"></i></span>
</button></td>
          

        </tr>

          )
      })}
        
          
        
         </MDBTableBody>
    </MDBTable>
    </Fragment>

  );
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
 showProducts: () => dispatch(showProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);

