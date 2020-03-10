import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import { Typography, Grid, CircularProgress, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { BookListStyles } from '../../styles/BooksListStyles'
import actions from '../../actions'

const BooksList = props => {
    const classes = BookListStyles()
    const { isLoading, booksList, error } = useSelector((state) => state.booksList)
    const dispatch = useDispatch()
    const handleLeftRender = props.handleLeftRender

    useEffect(() => {
        dispatch(actions.booksList.getBooksList())
    },[])

    const handleView = ( type, book ) => {
        handleLeftRender(type, book)
    }

    const renderBookCards = () => {
        return booksList.map( book => {
            return (
                <GridListTile key={book._id}>
                    <img 
                        className={classes.img} 
                        src={book.cover} 
                        alt={book.name}
                        onClick={() => handleView( 'summary' , book)}
                    />
                    <GridListTileBar
                        className={classes.titleBar}
                        title={book.name}
                        subtitle={<span>by: {book.writer}</span>}
                        actionIcon={
                            <IconButton aria-label={`edit ${book.name}`} onClick={() => handleView( 'edit', book)}>
                                <EditIcon className={classes.editIcon}/>
                            </IconButton>
                        }
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
            <Typography className={classes.header} align={'center'} variant={'overline'}> Your Books </Typography>
            { isLoading && <CircularProgress className={classes.loader} />}
            { !error && <GridList cols={getGridListCols()} cellHeight={'auto'} className={classes.gridList}>
                {renderBookCards()}
            </GridList>}
        </Grid>
    )
}

export default withWidth()(BooksList)