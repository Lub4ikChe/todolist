import { SHOW_ADD_TASK_MENU, HIDE_ADD_TASK_MENU, ADD_NEW_LIST_ITEM, REMOVE_LIST_ITEM, ADD_NEW_TASK_ITEM, REMOVE_TASK_ITEM, TOGGLE_TASK_ITEM_COMPLETED, CHANGE_LIST_ITEM_NAME, SET_ACTIVE_LIST_ITEM } from "./types";

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

export function addTaskItem(taskItem) {
    return {
        type: ADD_NEW_TASK_ITEM,
        payload: taskItem,
    }
}

export function removTaskItem(taskItemId) {
    return {
        type: REMOVE_TASK_ITEM,
        payload: taskItemId,
    };
}

export function toggleTaskItemCompleted(taskItemId) {
    return {
        type: TOGGLE_TASK_ITEM_COMPLETED,
        payload: taskItemId,
    };
}

export function changeListItemName(listItemId, newName) {
    return {
        type: CHANGE_LIST_ITEM_NAME,
        payload: {
            listItemId,
            newName
        },
    };
}

export function setActiveListItem(listItemId) {
    return {
        type: SET_ACTIVE_LIST_ITEM,
        payload: listItemId,
    }
}