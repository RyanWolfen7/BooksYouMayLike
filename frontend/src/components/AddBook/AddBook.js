import React, { useState } from 'react'
import { MainViewStyles } from '../../styles/MainViewStyles'
import { Grid, Container, Card, GridList, CardContent, Typography } from '@material-ui/core'
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
                <Container className={classes.container}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Grid cols={1}  className={classes.gridImg}>
                            <img src={book.cover} className={classes.img}/>
                            </Grid>            
                            <Typography gutterBottom variant="h5" component="h2">
                                {book.name}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h3">
                                {book.writer}
                            </Typography>
                            <GridList col={1} cellHeight={'auto'} className={classes.gridList}>
                                <Typography className={classes.summary} variant={'body1'}> {book.summary} </Typography>
                            </GridList>
                        </CardContent>
                    </Card>
                </Container>
            </Grid>
        </Grid>
    </>)
}

export default AddBook