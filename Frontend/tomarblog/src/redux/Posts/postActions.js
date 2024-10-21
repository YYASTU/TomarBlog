import { 
    FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_FAILURE, 
    CREATE_POST,
    EDIT_POST,
    DELETE_POST
 } from "./postTypes"
import axios from "axios"

export const createPost = (post) =>{
    return {
        type: CREATE_POST,
        payload: post
    }
}
export const editPost = (post) =>{
    return {
        type: EDIT_POST,
        payload: post
    }
}
export const deletePost = (postId) =>{
    return {
        type: DELETE_POST,
        payload: postId
    }
}
export const fetchPOSTsRequest = () =>{ 
    return {
        type: FETCH_POSTS_REQUEST
        
    }
}
export const fetchPOSTsFailure = (error) =>{ 
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}
export const fetchPOSTsSuccess = (POSTs)  =>{ 
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}
 
export const fetchPOSTs = () =>{
    return function(dispatch){
        dispatch(fetchPOSTsRequest())
        axios.get('http://localhost:5021/api/Person')
    .then(Response =>{
        const POSTs = Response.data
        console.log(posts)
        dispatch(fetchPOSTsSuccess(posts))
    })
    .catch(error => {
        dispatch(fetchPOSTsFailure(error.message))
    })
    }
}