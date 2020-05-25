import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { logout } from '../../redux/user/user.actions';
import {MDBIcon} from "mdbreact";


 
class Header extends React.Component{

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

render(){

  const {isAuthenticated, hidden, logout} =this.props;

  const userLinks = (
    <div className='options '>
     <Link className='option' to='/products'><span><MDBIcon icon="cart-arrow-down" /></span> SHOP</Link>
       <Link className='option1' to='/contact'><span><MDBIcon icon="clipboard-list" /></span> CONTACT</Link>
       <Link className='option1' to='/admin'><span><MDBIcon icon="clipboard-list" /></span> Admin</Link>
   
        <Link className='option' to='/signin' onClick={this.logout.bind(this)}><span><MDBIcon icon="user" /></span> LOGOUT</Link>

  <CartIcon/>
  </div>
  

    );

  const guestLinks =(
   <div className='options'>
   <Link className='option1' to='/admin'><span><MDBIcon icon="clipboard-list" /></span> Admin</Link>
     <Link className='option black-text' to='/products'><span><MDBIcon icon="cart-arrow-down" /></span> SHOP</Link>
       <Link className='option1 black-text' to='/contact'><span><MDBIcon icon="clipboard-list" /></span> CONTACT</Link>

   
        <Link className='option black-text' to='/signin'><span><MDBIcon icon="user" /></span> SIGN IN</Link>

  <CartIcon/>
  </div>

    );
  
return(

<div className='header'>
  <Link className='logo-container' to='/'>
    <Logo className='logo' />
    <h1 className="grey-text">LOLA</h1>
  </Link>

{hidden ? null : <CartDropdown />}
{ isAuthenticated ? userLinks : guestLinks }
  
 
</div>

  );

}

};

Header.propTypes = {
 
 logout: PropTypes.func.isRequired,

};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, { logout })(Header);