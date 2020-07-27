import * as types from '../actions/types';

const initialState = {
	userPosts: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_SURVEYS:
			return {
				...state,
				userPosts: action.payload.data || false,
			};
		default:
			return state;
	}
};

export default reducer;
