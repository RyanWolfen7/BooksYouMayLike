import React from 'react'
import { Grid } from '@material-ui/core'
import { AppStyles } from '../../styles/AppStyles'
import BooksList from '../BooksList/BooksList'

const App = ({ children }) => {
    const classes = AppStyles()

    return (
    <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6} className={classes.details}>
            test
        </Grid>
        <BooksList/>
    </Grid>
    )
}

export default App