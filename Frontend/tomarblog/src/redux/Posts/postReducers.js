import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./postTypes"
const initialState = {
    loading: true,
    users: [],
    error: ''   
}
export const postReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: 
        return {
            ...state,
            users: action.payload,
            loading: false,
            error: ''
        }
        case FETCH_USERS_FAILURE: 
        return {
            ...state,
            users: [],
            loading: false,
            errors: action.payload
        }
        default: 
        return state
    }
}