import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart.actions';
import {  MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";


const BestsellerItem = ({ item, addItem }) => {

  const { name, price } = item;
	return(


          <MDBCard className="align-items-center">
            <MDBCardImage
              src={'/assets/' + `${item.file}`}
              top
              style={{height: "300px"}}
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>{name}</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    
                    <MDBBadge pill color="danger">
                      NEW
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>{price}$</strong>
              </h4>
                 <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
            </MDBCardBody>
          </MDBCard>

);
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});


export default connect(
  null,
  mapDispatchToProps
)(BestsellerItem);

