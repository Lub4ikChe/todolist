import { combineReducers } from "redux";
import { listsReducer } from "./listsReducer";
import { colorsReducer } from "./colorsReducer";
import { tasksReducer } from "./tasksReducer";


export const rootReducer = combineReducers({
    lists: listsReducer,
    colors: colorsReducer,
    tasks: tasksReducer,
});
