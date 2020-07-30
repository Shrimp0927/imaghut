import * as types from '../actions/types';

const initialState = {
	userPosts: null,
	posts: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_POSTS:
			return {
				...state,
				posts: action.payload.data || false,
			};
		case types.FETCH_USER_POSTS:
			return {
				...state,
				userPosts: action.payload.data || false,
			};
		default:
			return state;
	}
};

export default reducer;
