import { 
    CREATE_POST, 
    EDIT_POST,
    DELETE_POST,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_REQUEST} from "./postTypes"
const initialState = {
    posts: [],
    loading: false,    
    error: ''   
}
export const postReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_POSTS_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case FETCH_POSTS_SUCCESS: 
        return {
            ...state,
            posts: action.payload,
            loading: false,
            error: ''
        }
        case FETCH_POSTS_FAILURE: 
        return {
            ...state,
            posts: [],
            loading: false,
            error: action.payload
        }
        case CREATE_POST:
            return{
                ...state,
                posts: [...state.posts, action.payload]

            }
        default:
        return state
    }
}