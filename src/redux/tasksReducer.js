import { SHOW_ADD_CARD, HIDE_ADD_CARD } from "./types";

let tasks = [
    { id: 1, listId: 2, text: "Изучить JavaScript", completed: false },
    { id: 2, listId: 2, text: "Изучить паттерны", completed: false },
    { id: 3, listId: 2, text: "123", completed: false },
    // { id: 4, listId: 1, text: "test", completed: false },
    // { id: 5, listId: 1, text: "qweqwe", completed: false },
    // { id: 6, listId: 1, text: "qweqwe", completed: false },
    // { id: 7, listId: 4, text: "Купить 1984!", completed: false },
    // { id: 8, listId: 3, text: "Сделали сайдбар", completed: false },
    // { id: 9, listId: 3, text: "Сделали список задач", completed: false },
    // { id: 10, listId: 1, text: "Сделали удаление ", completed: false },
    // { id: 11, listId: 4, text: "tttt", completed: false }
];


const initialState = {
    tasks,
    showAddCard: false,
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADD_CARD:
            return { ...state, showAddCard: true };

        case HIDE_ADD_CARD:
            return { ...state, showAddCard: false };

        default:
            return state;
    }
}
