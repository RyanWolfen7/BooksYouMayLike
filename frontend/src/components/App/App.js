import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { AppStyles } from '../../styles/AppStyles'
import BooksList from '../BooksList/BooksList'
import SummaryView from '../SummaryView/SummaryView'

const App = ({ children }) => {
    const classes = AppStyles()
    const [leftViewRender, setLeftViewRender] = useState({
        summary: false,
        selectedBook: null,
    })

    const handleLeftRender = ( type, book) => {
        if ( book === leftViewRender.selectedBook || leftViewRender[type] === false ) {
            const data = {[type]: !leftViewRender[type], selectedBook: !leftViewRender[type] ? book : null}
            setLeftViewRender({...leftViewRender, ...data})
        } else {
            setLeftViewRender({...leftViewRender, ...{ selectedBook: book }})
        }
    }

    // console.log(leftViewRender)
    return (
    <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6} className={classes.details}>
            { leftViewRender.summary && <SummaryView book={leftViewRender.selectedBook}/>}
        </Grid>
        <BooksList
            handleLeftRender={handleLeftRender}
        />
    </Grid>
    )
}

export default App