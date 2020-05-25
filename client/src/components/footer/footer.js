import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">CONTACT</h5>
            <p>EMAIL: lola@gmail.com</p>
            <p>NUMBER: 07-6666672</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/shop">Shop</a>
              </li>
              <li className="list-unstyled">
                <a href="/contact">Contact</a>
              </li>
    
              <li className="list-unstyled">
                <a href="signin">Sign in</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Salih Saadi </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;