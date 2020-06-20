import { ADD_NEW_TASK_ITEM, REMOVE_TASK_ITEM, TOGGLE_TASK_ITEM_COMPLETED } from "./types";

let tasks = [
    { id: 1, listId: 2, text: "Вивчити JavaScript", completed: false },
    { id: 2, listId: 2, text: "Вивчити патерни", completed: false },
    { id: 3, listId: 2, text: "123", completed: false },
    { id: 4, listId: 1, text: "test", completed: false },
    { id: 7, listId: 4, text: "Купити 1984!", completed: false },
    { id: 8, listId: 1, text: "Зробив сайдбар", completed: true },
    { id: 9, listId: 1, text: "Зробив список задач", completed: true },
    { id: 10, listId: 1, text: "Зробив видалення ", completed: true },
    { id: 11, listId: 4, text: "tttt", completed: false }
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
