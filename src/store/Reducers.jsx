import {
  GET_ALL_BOOKS,
  GET_BOOK,
  GET_SEARCH_BOOKS,
  REMOVE_SINGLE_BOOK,
} from './Keys'

const initialState = {
  books: [],
  book: '',
  allbooks: [],
}
export default function booksfetch(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_BOOKS: {
      return {
        ...state,
        books: action.payload,
      }
    }
    case GET_ALL_BOOKS: {
      return {
        ...state,
        allbooks: action.payload,
      }
    }
    case GET_BOOK: {
      return {
        ...state,
        book: action.payload,
      }
    }
    // case REMOVE_SINGLE_BOOK: {
    //   return {}
    // }
    default:
      return state
  }
}
