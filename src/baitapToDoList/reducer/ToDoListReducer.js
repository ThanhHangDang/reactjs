import { DarkTheme } from "../Themes/DarkThemes";
import * as ActionType from "./constant";
import {arrTheme} from "./../Themes/themeManager";

const intinialState = {
    theme: DarkTheme,
    taskList: [
        {
            id: "task-1",
            taskName: "Task 1",
            done: true,
        },
        {
            id: "task-2",
            taskName: "Task 1",
            done: false,
        },
        {
            id: "task-3",
            taskName: "Task 1",
            done: true,
        },
        {
            id: "task-4",
            taskName: "Task 1",
            done: false,
        },
    ],
}

const ToDoListReducer = (state=intinialState, action) => {
    switch (action.type) {
        case ActionType.ADD_TASK: {
            //Ktra rỗng
            if(action.payload.taskName.trim() === ""){
                alert("Task name is required!")
                return {...state};
            }
            //ktra tồn tại
            let taskListUpdate = [...state.taskList];
            const index = taskListUpdate.findIndex(
                (task) => task.taskName === action.payload.taskName
            );
            if(index !== -1){
                alert("Task name already exist!");
                return {...state};
            }
            else{
                taskListUpdate.push(action.payload);
            }
            state.taskList = taskListUpdate;
            return {...state};
        }

        case ActionType.CHANGE_THEME:{
            let theme = arrTheme.find(theme => theme.id === action.payload);
            if(theme){
                state.theme = {...theme.theme};
            }
            return {...state};
        }

        default:
            return {...state};
    }
}

export default ToDoListReducer;