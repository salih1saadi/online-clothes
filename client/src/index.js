import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import setAuthorizationToken from './redux/user/auth';
import jwt from 'jsonwebtoken';
import {setCurrentUser} from './redux/user/user.actions';
import { PersistGate } from 'redux-persist/integration/react';
import {store} from './redux/store.js';
import {persistor} from './redux/store';


if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(



<Provider store={store}>
  <BrowserRouter>
<PersistGate persistor={persistor}>
	<App />

</PersistGate>

  </BrowserRouter>
 
</Provider>
	 ,document.getElementById('root'));

