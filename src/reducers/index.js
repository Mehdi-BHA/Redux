import { combineReducers } from "redux"
import counterReducer from "./counterReducer"
import userReducer from "./userReducer"
import postsReducer from "./postsReducer"


const rootReducer = combineReducers({counterReducer,userReducer,postsReducer})

export default rootReducer