import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import fetchBooksSaga from './Saga/fetchBooksSaga'
import { rootReducer } from "./Reducers";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    );
    // then run the saga
    sagaMiddleware.run(fetchBooksSaga);
    return store;
}
export default configureStore;