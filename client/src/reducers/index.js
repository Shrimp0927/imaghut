import { combineReducers } from 'redux';
import authReducers from './authReducers';
import postsReducers from './postsReducers';

const rootReducer = combineReducers({
	auth: authReducers,
	posts: postsReducers,
});

export default rootReducer;
