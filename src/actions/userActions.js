import axios from "axios";
import { GET_POSTS_LOAD, GET_USERS_ERROR, GET_USERS_LOAD, GET_USERS_SUCCES } from "../constants/actionTypes";

const getUsers = () => async (dispatch, getState) => {
    dispatch({ type: GET_USERS_LOAD });
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: GET_USERS_SUCCES, payload: data });
    } catch (error) {
        dispatch({ type: GET_USERS_ERROR, payload: error.message });
    }
};

export { getUsers };
