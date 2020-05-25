import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {showCategory1} from '../../../../redux/shop/shop.actions';
import { withRouter } from "react-router-dom";
import { MDBContainer} from "mdbreact";
import CustomButton from '../../../../components/custom-button/custom-button';



class AddProduct extends React.Component {
 constructor(props) {
    super(props);
    this.fileInput = React.createRef();

    this.state = {
      name: '',
      category:'',
      file: '',
      price: '',
      selectedFile:null
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

 


  onSubmit = e =>{
     
   e.preventDefault();
   
  



   this.props.addProduct(
    this.state
   ).then(
    ()=>{

    const data = new FormData()
   data.append('file', this.state.selectedFile)
   axios.post(`http://localhost:5000/admin/products/add/upload`, data);
   
    console.log('added');
     this.props.history.push('/admin/products');
   
    
    } ,(err) => {

console.log(err);
 }
    );





    
  }

    handleChange = event => {


     

    const { name, value } = event.target;

    this.setState({ [name]: value });
   
  
  };

onChangeHandler=event=>{
  

    this.setState({
      selectedFile: event.target.files[0],
      file: this.fileInput.current.files[0].name,
      loaded: 0,
    })
    

    

   
  }

   onClickHandler = () => {

    console.log(this.state);
 
}

 

  render(){
    
    

     const {categories } = this.props;

  return (
    
      
      
          <div className="form-group mx-5 ml-lg-0">
          <h1>Add Product</h1>
          <form className='add-product-form' encType="multipart/form-data" onSubmit={this.onSubmit}>
          <div className="input-group d-block">
      <label htmlFor="formGroupExampleInput">Product Name</label>
      <input
        type="text"
        name='name'
        className="form-control"
        value={this.state.name}
        onChange={this.handleChange}
        id="formGroupExampleInput"
      />
      <div>
      <label htmlFor="category">Category</label>
        
   <select
    name='category'
    onChange={this.handleChange}
    className="browser-default custom-select" 
    
      >
      <option>Choose your option</option>

    { categories.map(item =>{

        return(
         <option 
         key = {item._id} item={item} 
         value={item._id}
         
        >{item.title}</option>
          
       
        
          )
      })}
</select>
      
      </div>
    
   
          <label >Image</label> 
        
          <div className="custom-file">

          
    <input
      name='file'
      type="file"
      ref={this.fileInput}
      onChange={this.onChangeHandler}
      className="custom-file-input"
      id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"
    />

    <label className="custom-file-label" htmlFor="inputGroupFile01">
      {this.state.file}
    </label>


  </div>
  <span className="input-group-text" id="inputGroupFileAddon01">
         <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
     </span>


             
            <label >Price</label> 
      <input
        type="text"
        name='price'
        placeholder='Price'
        className="form-control"
        value={this.state.price}
        onChange={this.handleChange}
        id="formGroupExampleInput"
      />
         
      </div>
      
       <MDBContainer>
       <br/>
      <CustomButton type='submit' inverted>
        Add Product
      </CustomButton>
      </MDBContainer>
    </form>
    <br/>

    </div>


  );
}
}

AddProduct.propTypes = {
 
 addProduct: PropTypes.func.isRequired,
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



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProduct));

