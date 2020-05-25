import React from 'react';
import PropTypes from 'prop-types';
import { MDBContainer, MDBNotification } from "mdbreact";

class FlashMessage extends React.Component{

	render(){
       
       const { text } = this.props.message;

		return(

    <div>{text &&  <MDBContainer >
        <MDBNotification
          show
          fade
          iconClassName="text-success"
          title="Registered"
          message={`${text}`}
          text="just now"
           style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 9999
        }}
        /></MDBContainer>}</div>

	   );
	}
}

 FlashMessage.propTypes = {

 	message:PropTypes.object.isRequired,
 }

 
 

export default FlashMessage;