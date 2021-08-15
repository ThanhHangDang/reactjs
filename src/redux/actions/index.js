import {DELETE, EDIT, SUBMIT, KEYWORD} from "./../constants";

//Action Creator
export const actDelete = (user) => {
    return {
        type: DELETE,
        payload: user,
    };   
}

export const actEdit = (user) => {
    return {
        type: EDIT,
        payload: user,
    };  
}

export const actSubmit = (user) => {
    return {
        type: SUBMIT,
        payload: user,
    };
}

export const actSearch = (keyword) => {
    return {
        type: KEYWORD,
        payload: keyword,
    };
}