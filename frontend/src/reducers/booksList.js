import {
    GET_BOOKS_LIST, GET_BOOKS_LIST_SUCCESS, GET_BOOKS_LIST_FAILURE,
    PUT_BOOK, PUT_BOOK_SUCCESS, PUT_BOOK_FAILURE
} from '../types'

const initialState = {
    isLoading: false,
    booksList: [],
    book: {},
    error: null 
}
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_BOOKS_LIST:
            return {
                ...state,
                isLoading: true
            }
        case GET_BOOKS_LIST_SUCCESS:
            return {
                ...state,
                booksList: action.payload.data,
                isLoading: false
            }
        case GET_BOOKS_LIST_FAILURE:
            return {
                ...state,
                error: action.error.response.data,
                isLoading: false
            }
        case PUT_BOOK:
            return {
                ...state,
                isLoading: true
            }
        case PUT_BOOK_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            }
        case PUT_BOOK_FAILURE:
            return {
                ...state,
                error: action.error.response.data,
                isLoading: false
            }
        default:
            return state
    }
}