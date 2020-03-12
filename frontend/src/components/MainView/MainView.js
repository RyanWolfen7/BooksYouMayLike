import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { Grid } from '@material-ui/core'
import { MainViewStyles } from '../../styles/MainViewStyles'
import BooksList from '../BooksList/BooksList'
import SummaryView from '../SummaryView/SummaryView'
import SaveBookForm from '../SaveBookForm/SaveBookForm'
import NavBar from '../NavBar/NavBar'

const MainView = props => {
    const classes = MainViewStyles()
    const [leftViewRender, setLeftViewRender] = useState({
        summary: false,
        edit: false,
        selectedBook: null,
    })

    const handleLeftRender = ( type, book) => {
        const defaultLeftView = { summary: false, edit: false}

        if ( book === leftViewRender.selectedBook || leftViewRender[type] === false ) {
            const data = {...defaultLeftView, ...{[type]: !leftViewRender[type], selectedBook: !leftViewRender[type] ? book : null}}
            setLeftViewRender({...leftViewRender, ...data})
        } else {
            setLeftViewRender({...leftViewRender, ...{ selectedBook: book }})
        }
    }

    return (<>
        <NavBar/>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={6} className={classes.details}>
                { leftViewRender.summary && <SummaryView book={leftViewRender.selectedBook}/>}
                { leftViewRender.edit && <SaveBookForm book={leftViewRender.selectedBook}/>}
            </Grid>
            {<BooksList
                handleLeftRender={handleLeftRender}
            />}
        </Grid>
    </>)
}

export default withRouter(MainView)