const initialState = {
    counter: 0
}

const reducer = (prevState = initialState, { type, payload }) => {
    switch (type) {

    case "INCREMENT":
        return { ...prevState, counter: prevState.counter + 1 }

    default:
        return prevState
    }
}
export default reducer