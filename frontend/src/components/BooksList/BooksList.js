import React, { useState } from 'react'
import { Paper, Grid } from '@material-ui/core'
import { BookListStyles } from '../../styles/BooksListStyles'

const BooksList = props => {
    const classes = BookListStyles()
    // fake for purpose of styling remove later
    const [ booksList, setBooksList ] = useState(['a','b','c','d'])

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