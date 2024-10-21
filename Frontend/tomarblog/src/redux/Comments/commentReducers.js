import { ADD_COMMENT, DELETE_COMMENT, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "./commentTypes";

const initialState ={
    loading: false,
    comments: [],
    error: ''
};

export const commentReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_COMMENTS_REQUEST:
            return {...state, loading: true};
        case FETCH_COMMENTS_SUCCESS:
            return{
                ...state,
                loading: false,
                comments: action.payload,
                error: ''
            }
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                comments: [],
                error: action.payload
            };
        case ADD_COMMENT:
            return{
                ...state,
                comments: [...state.comments, action.payload]
            };
        case DELETE_COMMENT:
        return{
            ...state,
            comments: state.comments.filter(Comment => Comment.Id !== action.payload)
        };
        default:
            return state;
    }
}