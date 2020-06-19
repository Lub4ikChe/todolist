import { SHOW_ADD_TASK_MENU, HIDE_ADD_TASK_MENU, ADD_NEW_LIST_ITEM, REMOVE_LIST_ITEM, CHANGE_LIST_ITEM_NAME } from "./types";

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

        case ADD_NEW_LIST_ITEM:
            return { ...state, lists: [...state.lists, action.payload] };

        case REMOVE_LIST_ITEM:
            return { ...state, lists: [...state.lists.filter(elem => elem.id !== action.payload)] };

        case CHANGE_LIST_ITEM_NAME:
            return {
                ...state, lists: [...state.lists].map(list => {
                    if (list.id === action.payload.listItemId) {
                        list.name = action.payload.newName;
                    }
                    return list;
                })
            };

        default:
            return state;
    }
}
