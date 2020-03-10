import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { AppStyles } from '../../styles/AppStyles'
import BooksList from '../BooksList/BooksList'

const App = ({ children }) => {
    const classes = AppStyles()
    const [leftViewRender, setLeftViewRender] = useState({
        summary: false,
        selectedBook: null
    })

    const handleLeftRender = ( type, book) => {
        if ( book === leftViewRender.selectedBook || leftViewRender[type] === false ) {
            setLeftViewRender({...leftViewRender, [type]: !leftViewRender[type], selectedBook: book })
        } else {
            setLeftViewRender({...setLeftViewRender, selectedBook: book})
        }
    }

    console.log(leftViewRender)
    return (
    <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6} className={classes.details}>
            test
        </Grid>
        <BooksList
            handleLeftRender={handleLeftRender}
        />
    </Grid>
    )
}

export default App