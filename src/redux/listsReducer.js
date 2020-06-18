import { SHOW_ADD_TASK_MENU, HIDE_ADD_TASK_MENU } from "./types";

let lists = [
    { id: 1, name: "Курс по ReactJS ToDo", colorId: 7 },
    { id: 2, name: "Фронтенд", colorId: 4 },
    { id: 3, name: "Фильмы и сериалы", colorId: 3 },
    { id: 4, name: "Книги", colorId: 2 },
    { id: 5, name: "Личное", colorId: 1 }
];

const initialState = {
    lists,
    showAddTaskMenu: false,
};

export const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADD_TASK_MENU:
            return { ...state, showAddTaskMenu: true };

        case HIDE_ADD_TASK_MENU:
            return { ...state, showAddTaskMenu: false };

        default:
            return state;
    }
}
