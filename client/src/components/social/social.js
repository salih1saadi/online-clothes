import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

const SocialButtonsPage = () => {
  return (
    <MDBContainer className="text-center">
      <MDBBtn  size="lg" social="fb">
        <MDBIcon  fab icon="facebook-f" />
      </MDBBtn>
      
      <MDBBtn size="lg" social="ins">
        <MDBIcon fab icon="instagram" />
      </MDBBtn>
      
    </MDBContainer>
  );
}

export default SocialButtonsPage;