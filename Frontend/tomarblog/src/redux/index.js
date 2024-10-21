// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import { postReducer } from './Posts/postReducers';
import { commentReducer } from './Comments/commentReducers';
import authReducer from './Auth/authReducer';


const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer,
    auth: authReducer, // Add auth to the combined reducer
});

export default rootReducer;
