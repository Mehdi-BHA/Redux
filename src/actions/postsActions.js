import axios from "axios";
import { GET_POSTS_ERROR, GET_POSTS_LOAD, GET_POSTS_SUCCES } from "../constants/actionTypes";

// const getPosts = () => {
//     return async (dispatch, getState) => {
//         dispatch({ type: GET_POSTS_LOAD });
//         try {
//             const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
//             dispatch({ type: GET_POSTS_SUCCES, payload: data });
//         } catch (error) {
//             dispatch({ type: GET_POSTS_ERROR, payload: error.message });
//         }
//     };
// };

const getPosts = () => async (dispatch, getState) => {
    dispatch({ type: GET_POSTS_LOAD });
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch({ type: GET_POSTS_SUCCES, payload: data });
    } catch (error) {
        dispatch({ type: GET_POSTS_ERROR, payload: error.message });
    }
};

export { getPosts };
