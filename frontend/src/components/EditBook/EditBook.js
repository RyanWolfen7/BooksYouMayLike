import React, { useState } from 'react'
import { TextField, Container, Button, Grid } from '@material-ui/core'
import { EditBookStyles } from '../../styles/EditBookStyle'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'


const EditBook = props => {
    const classes = EditBookStyles()
    const [book, setBook] = useState(props.book)
    const date = new Date(book.date_published * 1000).toISOString().split('T')[0]

    const onChange = event => {
        let value = event.target.value
        if (event.target.id === 'date_published') {
            value = (new Date(value).getTime() / 1000).toString()
        }
        setBook({...book, ...{ [event.target.id]: value } })
    }

    return (
        <Container className={classes.container}>
            <form className={classes.form} autoComplete='off'>
                    <TextField
                        id="name"
                        label="Name"
                        multiline
                        rowsMax="4"
                        value={book.name}
                        width={1}
                        onChange={event => onChange(event)}
                    />
                    <TextField
                        id="writer"
                        label="Writer"
                        value={book.writer}
                        width={1}
                        onChange={event => onChange(event)}
                    />
                    <TextField
                        id="date_published"
                        label="Date Published"
                        type='date'
                        variant="outlined"
                        value={date}
                        width={1}
                        onChange={event => onChange(event)}
                    />
                    <TextField
                        id="cover"
                        label="Cover URL"
                        value={book.cover}
                        width={1}
                        onChange={event => onChange(event)}
                    />
                    <TextField
                        id="summary"
                        label="Summary"
                        multiline
                        rowsMax="4"
                        value={book.summary}
                        width={1}
                        onChange={event => onChange(event)}
                    />
                    <Grid container justify='center'>
                        <Button
                            varient="contained"
                            className={classes.save}
                            startIcon={<SaveIcon/>}
                        > Save </Button>
                        <Button
                            varient="contained"
                            className={classes.delete}
                            startIcon={<DeleteIcon/>}
                        > Delete </Button>
                    </Grid>
            </form>
        </Container>
    
    )
}

export default EditBook