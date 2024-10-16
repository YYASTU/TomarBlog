import { createStore, applyMiddleware } from 'redux';
import {postReducer} from './Posts/postReducers'; // Make sure you create reducers
import {thunk} from 'redux-thunk'
// import axios from 'axios'
 const store = createStore(postReducer, applyMiddleware(thunk));
 export default store;
