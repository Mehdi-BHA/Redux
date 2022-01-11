import { GET_USERS_ERROR, GET_USERS_LOAD, GET_USERS_SUCCES } from "../constants/actionTypes";

const initialState = {
    users: [],
    isLoading: false,
    error: null,
};

const userReducer = (prevState = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS_LOAD:
            return { ...prevState,  isLoading: true };
        case GET_USERS_ERROR:
            return { ...prevState,  isLoading: false, error: payload };
        case GET_USERS_SUCCES:
            return { ...prevState, users: payload, isLoading: false, error: null };

        default:
            return prevState;
    }
};

export default userReducer;
