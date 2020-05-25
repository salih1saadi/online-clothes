import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  FlashMessage  from './flashMessage';




class FlashMessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message}  />
    );

    return (
      <div>{messages}</div>
    );
  }
}
 FlashMessagesList.propTypes = {

 	messages:PropTypes.array.isRequired,
 }

function mapStateToProps(state) {
  return {
    messages: state.flashMessage
  }
}


export default connect(mapStateToProps)(FlashMessagesList);