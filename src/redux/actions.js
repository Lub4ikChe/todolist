import { SHOW_ADD_TASK_MENU, HIDE_ADD_TASK_MENU, SHOW_ADD_CARD, HIDE_ADD_CARD, ADD_NEW_LIST_ITEM, REMOVE_LIST_ITEM } from "./types";

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

export function addListItem(listItem) {
    return {
        type: ADD_NEW_LIST_ITEM,
        payload: listItem,
    };
}

export function removListItem(listItemId) {
    return {
        type: REMOVE_LIST_ITEM,
        payload: listItemId,
    };
}