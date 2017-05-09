import { combinedReducers } from 'redux';
import locationReducer from './locationReducer';
import productsReducer from './productsReducer';

const rootReducer = combinedReducers({
	location: locationReducer,
	products: productsReducer
})

export default rootReducer;