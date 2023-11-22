import XMLParser from 'react-xml-parser'
import API from '../api/GoReadsApi'
import {
  GET_SEARCH_BOOKS,
  GET_ALL_BOOKS,
  GET_BOOK,
  REMOVE_SINGLE_BOOK,
} from './Keys'

let searchData
let allBooksData

export const bookSearch = (query) => async (dispatch) => {
  await API.get(`/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${query}`)
    .then((response) => {
      let jsonData = new XMLParser().parseFromString(response.data)
      let booksList = jsonData.children[1].children[6].children
      searchData = booksList.map((book) => {
        return {
          id: book.children[8].children[0].value,
          book: book.children[8].children[1].value,
          author: book.children[8].children[2].value,
        }
      })
      dispatch({
        type: GET_SEARCH_BOOKS,
        payload: searchData,
      })
    })
    .catch((err) => console.log(err))
}

export const allBooks = (query) => async (dispatch) => {
  await API.get(`/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${query}`)
    .then((response) => {
      let jsonData = new XMLParser().parseFromString(response.data)
      let booksList = jsonData.children[1].children[6].children
      allBooksData = booksList.map((book) => {
        return {
          id: book.children[8].children[0].value,
          book: book.children[8].children[1].value,
          author: book.children[8].children[2].value,
          img: book.children[8].children[3].value,
        }
      })
      dispatch({
        type: GET_ALL_BOOKS,
        payload: allBooksData,
      })
    })
    .catch((err) => console.log(err))
}

export const getSingleBook = (id) => async (dispatch) => {
  await API.get(
    `https://www.goodreads.com/book/show/${id}?key=FtRVHgmjzjpzKjCt3SUMw`
  ).then((response) => {
    let jsonData = new XMLParser().parseFromString(response.data)
    let bookList = jsonData.children[1].children
    let bookFilter = {
      book: bookList[1],
      image: bookList[8],
      average_rating: bookList[18],
      small_image_url: bookList[9],
    }
    dispatch({
      type: GET_BOOK,
      payload: bookFilter,
    })
  })
}

// export const removeSingleBook = () => {
//   return {
//     type: REMOVE_SINGLE_BOOK,
//   }
// }
