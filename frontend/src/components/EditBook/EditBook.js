import React from 'react'
import { TextField, TextareaAutosize } from '@material-ui/core'
import { EditBookStyles } from '../../styles/EditBookStyle'
import booksList from '../../actions/booksList'

const EditBook = props => {
    const classes = EditBookStyles()
    const book = props.book
    const date = new Date(book.date_published * 1000).toISOString().split('T')[0]

    return (
        <form className={classes.form} autoComplete='off'>
            <div>
                <TextField
                    id="name"
                    label="Name"
                    multiline
                    rowsMax="4"
                    value={book.name}
                />
                <TextField
                    id="writer"
                    label="Writer"
                    value={book.writer}
                />
                <TextField
                    id="date_published"
                    label="Date Published"
                    type='date'
                    variant="outlined"
                    value={date}
                />
                <TextField
                    id="cover"
                    label="Cover URL"
                    value={book.cover}
                />
                <TextField
                    id="standard-multiline-static"
                    label="Summary"
                    multiline
                    rowsMax="4"
                    value={book.summary}
                    className={classes.summary}
                />
            </div>
        </form>
    )
}

export default EditBook