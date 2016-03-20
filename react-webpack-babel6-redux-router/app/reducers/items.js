import { ADD_ITEM, DELETE_ITEM } from '../constants';
import Immutable from 'immutable';
const initialState = [
    {
        id: 1,
        text: '学react好开心'
    }
];

export default function items(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            return [
                {
                    id: new Date().getTime(),
                    text: action.text
                }, ...state
            ]
        case DELETE_ITEM:
            return state.filter(item =>
                item.id !== action.id
            );
        default:
            return state;
    }
}