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
export const fetchPostRequest = () =>{ 
    return {
        type: FETCH_POSTS_REQUEST        
    }
}
export const fetchPostFailure = (error) =>{ 
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}
export const fetchPostSuccess = (posts)  =>{ 
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}
 
export const fetchPost = () =>{
    return function(dispatch){
        dispatch(fetchPostRequest())
        axios.get('http://localhost:5021/api/Person')
    .then(Response =>{
        const posts = Response.data
        console.log(posts)
        dispatch(fetchPostSuccess(posts))
    })
    .catch(error => {
        dispatch(fetchPostFailure(error.message))
    })
    }
}