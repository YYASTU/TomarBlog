import { CREATE_POST } from "./postTypes"
const initialState = {
    id: 1,    
}
const postReducer = (state = initialState, action) =>{
    switch(action.type){
        case CREATE_POST: return {
            ...state,
            id: state.id +1
        };
        default: return state
    }
}
export default postReducer