import React from "react";
import BestsellerItem from './bestseller-item';
import {  MDBRow, MDBCol } from "mdbreact";

const Bestseller = ({ title, products }) =>  (
    <section className="text-center my-5 d-inline">

      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our bestsellers
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        You Can Enjoy The New Collection
      </p>

  <MDBRow>
        
      {products.filter((item, idx) => idx < 8).map(item => (
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <BestsellerItem key={item._id} item={item} />
          </MDBCol>
        ))}
      
      </MDBRow>
      </section>
      );



export default Bestseller;