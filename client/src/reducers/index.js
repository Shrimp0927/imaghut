import { combineReducers } from 'redux';
import authReducers from './authReducers';
import postsReducers from './postsReducers';
import userReducers from './userReducers';

const rootReducer = combineReducers({
	auth: authReducers,
	posts: postsReducers,
	user: userReducers,
});

export default rootReducer;
