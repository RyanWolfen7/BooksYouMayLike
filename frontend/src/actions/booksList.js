import { 
    GET_BOOKS_LIST, GET_BOOKS_LIST_SUCCESS, GET_BOOKS_LIST_FAILURE,
    PUT_BOOK, PUT_BOOK_SUCCESS, PUT_BOOK_FAILURE
} from '../types/index'

const getBooksList = () => {
    return({
        types: [GET_BOOKS_LIST,GET_BOOKS_LIST_SUCCESS, GET_BOOKS_LIST_FAILURE],
        payload: {
            request: {
                url: '/books',
                method: 'GET'
            }
        }
    })
}

const updateBook = book => {
    return({
        types: [PUT_BOOK, PUT_BOOK_SUCCESS, PUT_BOOK_FAILURE],
        payload: {
            request: {
                url: '/books/update',
                method: 'PUT',
                data: book
            }
        }
    })
}

export default {
    getBooksList,
    updateBook
}