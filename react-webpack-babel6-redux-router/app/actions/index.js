import * as types from '../constants';

export function addItem(text) {
    return {
        type: types.ADD_ITEM,
        text
    }
}

export function deleteItem(id) {
    return {
        type: types.DELETE_ITEM,
        id
    }
}
