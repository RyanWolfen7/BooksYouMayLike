import { 
    GET_BOOKS_LIST,
    GET_BOOKS_LIST_SUCCESS,
    GET_BOOKS_LIST_FAILURE
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

export default {
    getBooksList
}