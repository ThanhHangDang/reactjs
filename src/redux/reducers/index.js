import {combineReducers} from "redux";
import userReducer from "./user";
import shoppingCartReducer from "./shoppingCart";

const rootReducer = combineReducers({
    //combine child reducer
    userReducer, //userReducer: userReducer
    shoppingCartReducer,
});

export default rootReducer;