import { GET_POSTS_ERROR, GET_POSTS_LOAD, GET_POSTS_SUCCES } from "../constants/actionTypes";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POSTS_LOAD:
            return { ...state, isLoading:true};
        case GET_POSTS_SUCCES:
            return { ...state,  isLoading:false,error:null,posts:payload };
        case GET_POSTS_ERROR:
            return { ...state, isLoading:false,error:payload };

        default:
            return state;
    }
};

export default postsReducer