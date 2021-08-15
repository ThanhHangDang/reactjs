import {combineReducers} from "redux";
import userReducer from "./user";
import shoppingCartReducer from "./shoppingCart";
import gameTaiXiuReducer from "./gameTaiXiu";

const rootReducer = combineReducers({
    //combine child reducer
    userReducer, //userReducer: userReducer
    shoppingCartReducer,
    gameTaiXiuReducer,
});

export default rootReducer;