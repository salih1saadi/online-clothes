import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';


const middlewares = [logger];

export const store = createStore(rootReducer, compose(
   applyMiddleware(thunk),
 window.devToolsExtension ? window.devToolsExtension() : f => f
   
	) 

);

export const persistor = persistStore(store);


export default { store, persistStore };