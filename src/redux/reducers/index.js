import {combineReducers} from "redux";
import userReducer from "./user";
import shoppingCartReducer from "./shoppingCart";
import gameTaiXiuReducer from "./gameTaiXiu";
import ToDoListReducer from "../../baitapToDoList/reducer/ToDoListReducer";

const rootReducer = combineReducers({
    //combine child reducer
    userReducer, //userReducer: userReducer
    shoppingCartReducer,
    gameTaiXiuReducer,
    ToDoListReducer,
});

export default rootReducer;