import * as types from './types';
import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: types.FETCH_USERS, payload: res });
};

export const fetchPosts = () => async (dispatch) => {
	const res = await axios.get('/api/posts');
	dispatch({ type: types.FETCH_SURVEYS, payload: res });
};
