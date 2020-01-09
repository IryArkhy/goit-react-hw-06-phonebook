import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const enhancer = composeWithDevTools();

const store = createStore(rootReducer, enhancer);

export default store;
