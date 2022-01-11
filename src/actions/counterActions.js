import {INCREMENT, INCREMENT_BY_AMOUNT } from "../constants/actionTypes";

const increment = () => {
    return { type: INCREMENT};
};

const incrementByAmount = (payload) => {
    return { type: INCREMENT_BY_AMOUNT, payload };
};

export { increment, incrementByAmount };
