export const ADD_LOCATION = 'ADD_LOCATION';
export const FIND_PRODUCTS = 'FIND_PRODUCTS';
import { browserHistory } from 'react-router';

export const addLocation = (location) => ({
	type: ADD_LOCATION,
	payload: location
})

const headers = {
	// 'Token YOUR_API_TOKEN_KEY'
	'Authorization': 'Token giwaWhXqCRjlPltTiV0V8sbz_PMo1FecdpBbmiVy',
	'Content-Type': 'application/json',
	'Accept_Language': 'en_EN'
}

// this works thanks to "thunk middleware"
export const findProducts = (name) => {

	return (dispatch, getState) => {
		
		const { startLatitude, startLongitude, endLatitude, endLongitude } = getState().location;

		// arguments:
		// arg1 is the api that we will hit = uber.com/startlocation,endlocation
		// arg2 {} method, GET, POST
			// metadata is data that describes data
			// our 'header' also provides authentications
				// pending, full-filled, or rejected
		// this fetch returns a promise
		fetch(`https://api.uber.com/v1.2/estimates/price?start_latitude=${startLatitude}&start_longitude=${startLongitude}&end_latitude=${endLatitude}&end_longitude=${endLongitude}`, {
			method: 'GET',
			headers,
		})
		.then((data) => data.json())
		.then(({prices}) => {
			dispatch({
				type: FIND_PRODUCTS,
				payload: prices
			})
			// change my url => /products/MY_NAME
			browserHistory.push(`/products/${name}`)
		})
	}
}