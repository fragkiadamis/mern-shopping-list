import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: "Beer" },
        { id: uuid(), name: "Wine" },
        { id: uuid(), name: "Gin" },
        { id: uuid(), name: "More beer..." }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}