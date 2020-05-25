import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ContactPage from './pages/contact/contact';
import SignInSignUp  from './pages/sign-up-in/sign-up-in';
import CheckoutPage from './pages/checkout/checkout';
import Admin from './pages/admin/pages/admin';
import ShopProduct from './pages/shop-product/shop-product';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { setCurrentUser } from './redux/user/user.actions';
import FlashMessagesList from './components/flash/flashMessagesList';

class App extends React.Component {
  


  render() {

   
  return (
    <div className="App">
    <Header />
    <FlashMessagesList />
    <hr/>
     <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/admin' component={Admin} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route  path={`/products`} component={ShopProduct} />
          <Route
            exact
            path='/signin'
            
            component={SignInSignUp }

          />
        </Switch>
        <Footer />
    
    </div>
  );
}
}

const mapDispatchToProps = dispatch =>({

setCurrentUser: user => dispatch(setCurrentUser(user)),





})

export default connect(null, mapDispatchToProps)(App);
