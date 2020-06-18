import { SHOW_ADD_TASK_MENU, HIDE_ADD_TASK_MENU, SHOW_ADD_CARD, HIDE_ADD_CARD } from "./types";

export function showAddTaskMenu() {
    return {
        type: SHOW_ADD_TASK_MENU
    };
}

export function hideAddTaskMenu() {
    return {
        type: HIDE_ADD_TASK_MENU
    };
}

export function showAddCard() {
    return {
        type: SHOW_ADD_CARD
    };
}

export function hideAddCard() {
    return {
        type: HIDE_ADD_CARD
    };
}

