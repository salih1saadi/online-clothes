import React, { Fragment } from "react";
import Table from '../table/table';
import { connect } from 'react-redux';
import {showCategory1} from '../../../../redux/shop/shop.actions';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import CustomButton from '../../../../components/custom-button/custom-button';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Category extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      routeName:'',
      
      
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e =>{
     
   e.preventDefault();
   
   
   this.props.addCategory(this.state).then(
    ()=>{
       
    console.log('added');
     this.props.history.push('/admin/categories');
   
    
    } ,(err) => {

console.log(err);
 }
    );
    
  }

    handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render(){

    const {categories} = this.props;
  return (
    <Fragment>
    <form className='add-category-form' onSubmit={this.onSubmit}>
      <h1>Add Category</h1>
      <div className="form-group">
        <label htmlFor="title">Category Name</label>
        <input
        type="text"
        name='title'
        placeholder='title'
        className="form-control"
        value={this.state.title}
        onChange={this.handleChange}
        id="formGroupExampleInput"
      />
         <label htmlFor="routeName">Route Name</label>
            <input
        type="text"
        name='routeName'
        placeholder='Route'
        className="form-control"
        value={this.state.routeName}
        onChange={this.handleChange}
        id="formGroupExampleInput"
      />

      
          
      </div>
      
      <CustomButton  inverted>
        Add Category
      </CustomButton>
      <br/>
    </form>
    <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Route NAME</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>

      { categories.map(item =>{

        return(

        <Table key = {item._id} item={item} />

          )
      })}
      
      
  
         </MDBTableBody>
    </MDBTable>
    </Fragment>

  );
}
}
Category.propTypes = {
 
 addCategory: PropTypes.func.isRequired,
 addFlashMessage: PropTypes.func,


};




const mapStateToProps = state => {
  return {
    categories: state.shop.categories,
  };
};

const mapDispatchToProps = (dispatch) => ({
 showCategory1: () => dispatch(showCategory1())
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Category));





