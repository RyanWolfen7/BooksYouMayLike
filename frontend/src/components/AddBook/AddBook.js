import React, { useState } from 'react'
import { MainViewStyles } from '../../styles/MainViewStyles'
import { Grid } from '@material-ui/core'
import SaveBookForm from '../SaveBookForm/SaveBookForm'
import NavBar from '../NavBar/NavBar'

const AddBook = props => {
    const classes = MainViewStyles()
    const [ book, setBook ] = useState({
        name: '',
        writer: '',
        date_published: '',
        cover: '',
        summary: ''
    })

    const updateBookDetails = bookForm => {
        setBook(bookForm)
    }

    return (<> 
        <NavBar/>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={6} className={classes.details}>
                <SaveBookForm book={book} updateBookDetails={updateBookDetails}/>
            </Grid>
            <Grid item xs={6} className={classes.details}>
            </Grid>
        </Grid>
    </>)
}

export default AddBook