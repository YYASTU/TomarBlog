// src/redux/actions/CommentActions.js
import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    ADD_COMMENT,
    DELETE_COMMENT
} from '../Comment/commentTypes';
import axios from 'axios';

export const fetchcommentsRequest = () => ({ type: FETCH_COMMENTS_REQUEST });
export const fetchCommentsSuccess = (Comments) => ({ type: FETCH_COMMENT_SUCCESS, payload: Comments });
export const fetchCommentsFailure = (error) => ({ type: FETCH_COMMENT_FAILURE, payload: error });
export const addComment = (comment) => ({ type: ADD_COMMENT, payload: comment });
export const deleteComment = (commentId) => ({ type: DELETE_COMMENT, payload: commentId });

export const fetchComments = () => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest());
        axios.get('/api/Comments') // Replace with your API endpoint
            .then(response => {
                dispatch(fetchCommentsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchCommentsFailure(error.message));
            });
    };
};

// Similarly, create actions for comments
