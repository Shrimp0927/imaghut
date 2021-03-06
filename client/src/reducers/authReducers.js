import * as types from '../actions/types';

const initialState = {
	userLogin: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_USERS:
			return {
				...state,
				userLogin: action.payload.data._id || false,
			};
		default:
			return state;
	}
};

export default reducer;
