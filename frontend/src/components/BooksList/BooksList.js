import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
import { Card, CardActionArea, CardMedia, Grid, CircularProgress } from '@material-ui/core'
import { BookListStyles } from '../../styles/BooksListStyles'
import actions from '../../actions'

const BooksList = props => {
    const classes = BookListStyles()
    const { isLoading, booksList, error } = useSelector((state) => state.booksList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.booksList.getBooksList())
    },[])

    const renderBookCards = () => {
        return booksList.map( book => {
            console.log(book)
            return (
                <Grid item xs={3} sm={3} key={book._id}>
                    <Card className={classes.paper}> 
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={book.cover}
                                title={book.name}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            )
        })
    }

    return (
    <div className={classes.root}>
        { isLoading && <CircularProgress className={classes.loader} />}
        <Grid container spacing={3}>
            {renderBookCards()}
        </Grid>
    </div>
    )
}

export default BooksList