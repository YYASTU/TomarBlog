import axios from "axios"

export const emailExists = async  (email) =>{
    const DoesExist  = await axios.get(`./api/path${email}`);
    if(DoesExist){
        return true;
    }
    return false;
 } 
export const getUserById = async (userId) =>{
    const response = await axios.get(`/api/user/${userId}`);
    return response.data
}
export const getUserByUsername = async (username) =>{
    const response = await axios.get(`/api/user/${username}`);
    return response.data
}
export const getAllPosts = async () =>{
    const response  = await axios.get(`/api/getAllPosts`);
}
export const getUsersPost = async (userid) =>{
    const response  = await axios.get(`/api/getusersPost/${userid}`);
}
export const getPostComments = async(postId ) =>{
    const response = await axios.get(`/api/getPostsComment/${postId}`);
}