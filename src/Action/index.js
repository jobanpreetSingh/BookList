export const fetchBooksAction = ({ type, data }) => {
    return {
        type: type,
        payload: data
    }
}