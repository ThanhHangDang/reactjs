import * as ActionType from "./constant";

export const actAddTask = (newtask) => ({
    type: ActionType.ADD_TASK,
    payload: newtask,
})

export const actChangeTheme = (themeId) => ({
    type: ActionType.CHANGE_THEME,
    payload: themeId,
})
