// src/redux/reducers/authReducer.js
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from '../Auth/authTypes';

const initialState = {
    loading: false,
    user: null,
    error: '',
    isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return { loading: false, user: action.payload, isAuthenticated: true, error: '' };
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
            return { loading: false, user: null, isAuthenticated: false, error: action.payload };
        case LOGOUT:
            return { loading: false, user: null, isAuthenticated: false, error: '' };
        default:
            return state;
    }
};

export default authReducer;
