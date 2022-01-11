import { INCREMENT } from "../constants/actionTypes";

const initialState = {
    counter: 0,
};

const reducer = (prevState = initialState, { type, payload }) => {
    switch (type) {
        case INCREMENT:
            return { ...prevState, counter: prevState.counter + 1 };
        case "DECREMENT":
            return { ...prevState, counter: prevState.counter - 1 };
        case "INCREMENT_BY_AMOUNT":
            return { ...prevState, counter: +prevState.counter + payload };

        default:
            return prevState;
    }
};
export default reducer;
