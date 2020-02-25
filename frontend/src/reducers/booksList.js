import {
    GET_BOOK_LIST, GET_BOOK_LIST_SUCCESS, GET_BOOK_LIST_FAILURE, GET_BOOKS_LIST
} from '../types'
import { Anyaction } from 'redux'

const initialState = {
    isLoading: false,
    booksList: [],
    book: {},
    error: null 
}

export default (state, action) => {
    switch(action.type) {
        case GET_BOOKS_LIST:
            return {
                ...state,
                isLoading: true
            }
        case GET_BOOK_LIST_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            }
        case GET_BOOK_LIST_FAILURE:
            return {
                ...state,
                error: action.error.response.data,
                isLoading: false
            }
        default:
            return state
    }
}