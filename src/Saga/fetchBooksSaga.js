import { put, takeEvery } from 'redux-saga/effects'
import { FETCH_BOOKS, FETCH_BOOKS_SAGA } from '../constant';
import { fetchBooksAction } from '../Action';
// fetch books async 
const fetchBooks = async () => {
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a')
    const books = await response.json()
    if (response.status === 200) {
        return books;
    }
}
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
    try {
        const booklist = yield fetchBooks()
        yield put(fetchBooksAction({ type: FETCH_BOOKS, data: booklist }))

    } catch (e) {
        console.log('error', e)

    }
}
//redux saga watcher to watch the dispatch
function* fetchBooksSaga() {
    yield takeEvery(FETCH_BOOKS_SAGA, fetchUser);
}
export default fetchBooksSaga;