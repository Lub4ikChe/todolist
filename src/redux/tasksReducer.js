import { ADD_NEW_TASK_ITEM, REMOVE_TASK_ITEM, TOGGLE_TASK_ITEM_COMPLETED } from "./types";

let tasks = [

];


const initialState = {
    tasks,
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NEW_TASK_ITEM:
            return { ...state, tasks: [...state.tasks, action.payload] };

        case REMOVE_TASK_ITEM:
            return { ...state, tasks: [...state.tasks.filter(elem => elem.id !== action.payload)] };

        case TOGGLE_TASK_ITEM_COMPLETED:
            return {
                ...state, tasks: [...state.tasks].map(task => {
                    if (task.id === action.payload) {
                        task.completed = !task.completed;
                    }
                    return task;
                })
            };

        default:
            return state;
    }
}
