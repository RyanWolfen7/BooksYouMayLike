import React from 'react'
import { TextField, TextareaAutosize, Container, Paper } from '@material-ui/core'
import { EditBookStyles } from '../../styles/EditBookStyle'
import booksList from '../../actions/booksList'

const EditBook = props => {
    const classes = EditBookStyles()
    const book = props.book
    const date = new Date(book.date_published * 1000).toISOString().split('T')[0]

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
                    />
                    <TextField
                        id="writer"
                        label="Writer"
                        value={book.writer}
                        width={1}
                    />
                    <TextField
                        id="date_published"
                        label="Date Published"
                        type='date'
                        variant="outlined"
                        value={date}
                        width={1}
                    />
                    <TextField
                        id="cover"
                        label="Cover URL"
                        value={book.cover}
                        width={1}
                    />
                    <TextField
                        id="summary"
                        label="Summary"
                        multiline
                        rowsMax="4"
                        value={book.summary}
                        width={1}
                    />
                    <button> Save </button>
                    <button>delete</button>
            </form>
        </Container>
    
    )
}

export default EditBook