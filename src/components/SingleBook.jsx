import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleBook } from '../store/Actions'
import LinearProgress from '@mui/material/LinearProgress'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Divider } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

const singleBook = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState(2)
  const singleBook = useSelector((state) => state.booksfetch.book)
  const dispatch = useDispatch()
  let { id } = useParams()
  useEffect(() => {
    dispatch(getSingleBook(id))
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    // return () => {
    //   dispatch(removeSingleBook())
    // }
  }, [])

  return (
    <>
      {isLoading && (
        <div>
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        </div>
      )}
      <Grid
        container
        justify='center'
        sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}
      >
        <Grid item xs={12} sm={8} lg={4} xl={3}>
          <Card>
            <CardContent>
              <Stack
                direction='row'
                spacing={2}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                {singleBook && (
                  <Avatar src={singleBook.small_image_url.value} />
                )}
              </Stack>
              <Divider />
              <ListItem>
                <Typography variant='h6'>
                  <Box ml={6}>{singleBook && singleBook.book.value}</Box>
                </Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <Grid
                  container
                  sx={{ display: 'flex', justifyContent: 'center', mr: 10 }}
                >
                  <Box ml={8}>
                    {singleBook && <img src={singleBook.image.value}></img>}
                  </Box>
                </Grid>
              </ListItem>
              <Divider />

              <ListItem>
                <Grid
                  container
                  sx={{ display: 'flex', justifyContent: 'center', mr: 10 }}
                >
                  <Typography variant='h6'>
                    <Box ml={6}>
                      {singleBook && singleBook.average_rating.value}
                    </Box>
                  </Typography>
                </Grid>
              </ListItem>
              <Box sx={{ '& > legend': { mt: 2 } }}>
                <Grid
                  container
                  sx={{ display: 'flex', justifyContent: 'center', mr: 10 }}
                >
                  <Rating
                    name='simple-controlled'
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue)
                    }}
                  />
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default singleBook
