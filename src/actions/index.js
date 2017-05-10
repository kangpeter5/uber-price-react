export const ADD_LOCATION = 'ADD_LOCATION';
export const FIND_PRODUCTS = 'FIND_PRODUCTS';
// giwaWhXqCRjlPltTiV0V8sbz_PMo1FecdpBbmiVy

export const addLocation = (location) => ({
	type: ADD_LOCATION,
	payload: location
})

export const findProducts = (name) => {
	return ({
		type: FIND_PRODUCTS,
		payload: name
	})
}