import * as types from '../actions/types';

const initialState = {
	userFullName: null,
	userFollowers: null,
	userFollowing: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_USERS:
			return {
				...state,
				userFullName: action.payload.data.fullName || false,
				userFollowers: action.payload.data.followers || false,
				userFollowing: action.payload.data.following || false,
			};
		default:
			return state;
	}
};

export default reducer;
