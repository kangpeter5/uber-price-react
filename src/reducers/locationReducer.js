import { ADD_LOCATION } from '../actions';

const INIT_STATE = {
	startLatitude: '',
	startLongitude: '',
	endLatitude: '',
	endLongitude: '',
}

export default (state = INIT_STATE, action) => {
	switch(action.type){

		case ADD_LOCATION:
			return { ...state, ...action.payload }

		default: return state;
	}
}