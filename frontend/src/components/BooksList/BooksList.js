import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
import { Paper, Grid } from '@material-ui/core'
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
            return (
                <Grid item xs={3} sm={3}>
                    <Paper className={classes.paper}> This is a Book </Paper>
                </Grid>
            )
        })
    }

    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            {renderBookCards()}
        </Grid>
    </div>
    )
}

export default BooksList