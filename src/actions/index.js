export const ADD_LOCATION = 'ADD_LOCATION';
export const FIND_PRODUCTS = 'FIND_PRODUCTS';
// giwaWhXqCRjlPltTiV0V8sbz_PMo1FecdpBbmiVy

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

export const findProducts = (name) => {
	return (dispatch, getState) => {
		
		const { startLatitude, startLongitude, endLatitude, endLongitude } = getState().location;

		// arguments:
		// 1. is the api that we will hit = uber.com/startlocation,endlocation
		// 2. method, GET, POST
			// metadata is data that describes data aka headers
			//  and provides authentications
				// pending, full-filled, or rejected

		// `` = backticks
		// this fetch returns a promise
		fetch(`https://api.uber.com/v1.2/estimates/price?start_latitude=${startLatitude}&start_longitude=${startLongitude}&end_latitude=${endLatitude}&end_longitude=${endLongitude}`,{
			method: 'GET',
			headers, // same thing as 'headers: headers'
		})
		.then((data) => data.json())
		.then((estimationData) => {
			console.log('estimationData: ', estimationData);
		})
	}

	// return ({
	// 	type: FIND_PRODUCTS,
	// 	payload: name
	// })
}