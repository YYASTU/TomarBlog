import { createStore, applyMiddleware } from 'redux';
import {postReducer} from './Posts/postReducers'; // Make sure you create reducers
import {thunk} from 'redux-thunk'
import axios from 'axios'
import { fetchUsers, fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from './Posts/postActions';
import rootReducer from '.';


 const store = createStore(rootReducer, applyMiddleware(thunk));
 export default store;
//  store.subscribe(() => { console.log(store.getState())})
//  store.dispatch(fetchUsers())
