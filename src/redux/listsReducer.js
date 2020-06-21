import { ADD_NEW_LIST_ITEM, REMOVE_LIST_ITEM, CHANGE_LIST_ITEM_NAME, SET_ACTIVE_LIST_ITEM } from "./types";

let lists = [
];

const initialState = {
    lists,
    showAddTaskMenu: false,
    activeList: null,
};

export const listsReducer = (state = initialState, action) => {
    switch (action.type) {

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

        case SET_ACTIVE_LIST_ITEM:
            return {
                ...state, activeList: action.payload
            };

        default:
            return state;
    }
}
