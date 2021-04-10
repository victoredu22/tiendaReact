import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { carritoReducer } from '../reducers/carritoReducer';
import { marcasReducer } from '../reducers/marcasReducer';
import { producReducer } from '../reducers/productoReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  producto:producReducer,
  carrito:carritoReducer,
  marca:marcasReducer
});


export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);