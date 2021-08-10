import {combineReducers} from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
    //combine child reducer
    userReducer, //userReducer: userReducer
});

export default rootReducer;