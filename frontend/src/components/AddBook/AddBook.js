import React from 'react'
import { MainViewStyles } from '../../styles/MainViewStyles'
import { Grid } from '@material-ui/core'

const AddBook = props => {
    const classes = MainViewStyles()


    return (<> 
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={6} className={classes.details}>
            </Grid>
            <Grid item xs={6} className={classes.details}>
            </Grid>
        </Grid>
    </>)
}

export default AddBook