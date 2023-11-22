import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { bookSearch } from '../store/Actions'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [query, setquery] = useState('')
  const bookData = useSelector((state) => state.booksfetch.books)

  const dispatch = useDispatch()
  const handleOnChange = (e) => {
    let { value } = e.target
    setquery(value)
    dispatch(bookSearch(query))
  }

  const navigate = useNavigate()
  const HandleSearchBtn = (e) => {
    e.preventDefault()
    navigate(`/allbooks/${query}`)
  }

  return (
    <>
      <div style={styles.autobox}>
        <Box sx={styles.flexBox}>
          <Autocomplete
            sx={styles.search}
            id='combo-box-demo'
            autoHighlight
            options={bookData}
            getOptionLabel={(option) => option.book}
            renderOption={(props, option) => (
              <Box component='li' {...props}>
                {option.id} ({option.book})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={handleOnChange}
                label='Search Book'
              />
            )}
          />
          <Button
            variant='contained'
            size='medium'
            sx={styles.btn}
            onClick={HandleSearchBtn}
          >
            Search
          </Button>
        </Box>
      </div>
    </>
  )
}

const styles = {
  autobox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 69px)',
  },
  search: {
    width: 600,
    padding: 2,
  },
  flexBox: {
    display: 'flex',
  },
  btn: {
    height: 55,
    width: 150,
    marginTop: 2,
  },
}

export default SearchBar
