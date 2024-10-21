// src/redux/actions/authActions.js
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from '../Auth/authTypes';
import axios from 'axios';

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
export const logout = () => ({ type: LOGOUT });
export const signupRequest = () => ({ type: SIGNUP_REQUEST });
export const signupSuccess = (user) => ({ type: SIGNUP_SUCCESS, payload: user });
export const signupFailure = (error) => ({ type: SIGNUP_FAILURE, payload: error });

export const login = (credentials) => {
    return (dispatch) => {
        dispatch(loginRequest());
        axios.post('/api/auth/login', credentials) // Adjust API endpoint
            .then(response => {
                const user = response.data;
                localStorage.setItem('token', user.token); // Store token
                dispatch(loginSuccess(user));
            })
            .catch(error => {
                dispatch(loginFailure(error.message));
            });
    };
};

export const signup = (userData) => {
    return (dispatch) => {
        dispatch(signupRequest());
        axios.post('/api/auth/signup', userData) // Adjust API endpoint
            .then(response => {
                const user = response.data;
                dispatch(signupSuccess(user));
            })
            .catch(error => {
                dispatch(signupFailure(error.message));
            });
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('token'); // Remove token
        dispatch(logout());
    };
};
