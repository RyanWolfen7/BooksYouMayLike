import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import {  Grid, CircularProgress, GridList, GridListTile, GridListTileBar } from '@material-ui/core'
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
                <GridListTile key={book._id}>
                    <img className={classes.img} src={book.cover} alt={book.title}/>
                    <GridListTileBar
                        title={book.name}
                        subtitle={<span>by: {book.writer}</span>}
                    />
                </GridListTile>
            )
        })
    }

    const getGridListCols = () => {
        if (isWidthUp('xl', props.width)) { return 4 }
        if (isWidthUp('lg', props.width)) { return 3 }
        if (isWidthUp('md', props.width)) { return 2 }
        return 1
    }

    return (
        <Grid item xs={6} className={classes.scrollList}>
            { isLoading && <CircularProgress className={classes.loader} />}
            <GridList cols={getGridListCols()} cellHeight={'auto'} className={classes.gridList}>
                {renderBookCards()}
            </GridList>
        </Grid>
    )
}

export default withWidth()(BooksList)