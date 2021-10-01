import { combineReducers } from "redux";
import { fetchBooksReducer } from "./fetchBooksReducer";
export const rootReducer = combineReducers({
    fetchBooksReducer
})