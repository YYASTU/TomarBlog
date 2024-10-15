import { createStore } from 'redux';
import postReducer from './Posts/postReducers'; // Make sure you create reducers

const store = createStore(postReducer);

export default store;
