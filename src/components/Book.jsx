import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { allBooks } from '../store/Actions'
import { useParams, useNavigate } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

const Book = () => {
  const [isLoading, setIsLoading] = useState(true)
  const booksData = useSelector((state) => state.booksfetch.allbooks)
  const dispatch = useDispatch()
  let param = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    dispatch(allBooks(param.query))
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const handleClick = (id) => {
    navigate(`/singlebook/${id}`)
  }

  const renderingBooks = booksData.map((data) => {
    const { id, book, img } = data
    return (
      <Grid item xs={3} key={id}>
        <a onClick={() => handleClick(id)}>
          <Card sx={styles.cardWid}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='250'
                image={img}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {book}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
      </Grid>
    )
  })

  return (
    <>
      {isLoading && (
        <div>
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        </div>
      )}
      {renderingBooks}
    </>
  )
}
const styles = {
  cardWid: { maxWidth: 345, maxHeight: 300 },
}
export default Book
