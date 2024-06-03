import { combineEpics } from 'redux-observable';
import { productsEpic } from 'models/products';

export default combineEpics(productsEpic);
