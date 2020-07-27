import * as types from '../actions/types';

const initialState = {
	userLogin: null,
	userFullName: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_USERS:
			return {
				...state,
				userLogin: action.payload.data._id || false,
				userFullName: action.payload.data.fullName || false,
			};
		default:
			return state;
	}
};

export default reducer;
