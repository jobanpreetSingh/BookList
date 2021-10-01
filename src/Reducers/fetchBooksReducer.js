import { FETCH_BOOKS } from "../constant";
const intialState = {}
export const fetchBooksReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS: return action.payload;
        default:
            return state;
    }
}