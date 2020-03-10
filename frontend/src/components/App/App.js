import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { AppStyles } from '../../styles/AppStyles'
import BooksList from '../BooksList/BooksList'
import SummaryView from '../SummaryView/SummaryView'
import EditBook from '../EditBook/EditBook'

const App = ({ children }) => {
    const classes = AppStyles()
    const [leftViewRender, setLeftViewRender] = useState({
        summary: false,
        edit: false,
        selectedBook: null,
    })
    const isMobile = window.innerWidth <= 500;

    const handleLeftRender = ( type, book) => {
        const defaultLeftView = { summary: false, edit: false}

        if ( book === leftViewRender.selectedBook || leftViewRender[type] === false ) {
            const data = {...defaultLeftView, ...{[type]: !leftViewRender[type], selectedBook: !leftViewRender[type] ? book : null}}
            setLeftViewRender({...leftViewRender, ...data})
        } else {
            setLeftViewRender({...leftViewRender, ...{ selectedBook: book }})
        }
    }

    return (
    <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6} className={classes.details}>
            { leftViewRender.summary && <SummaryView book={leftViewRender.selectedBook}/>}
            { leftViewRender.edit && <EditBook book={leftViewRender.selectedBook}/>}
        </Grid>
        {<BooksList
            handleLeftRender={handleLeftRender}
        />}
    </Grid>
    )
}

export default App