import React from 'react'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material'
import Book from '../components/Book'

const BookListing = () => {
  return (
    <>
      <Box sx={styles.customBox}>
        <Grid container spacing={2}>
          <Book />
        </Grid>
      </Box>
    </>
  )
}
const styles = {
  customBox: { flexGrow: 1, padding: 10 },
}
export default BookListing
