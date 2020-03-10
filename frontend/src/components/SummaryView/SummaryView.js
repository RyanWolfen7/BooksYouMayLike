import React from 'react'
import { SummaryViewStyles } from '../../styles/SummaryViewStyles'
import { Card, CardContent, CardHeader, Typography, GridList, GridListTile } from '@material-ui/core'

const SummaryView = props => {
    const classes = SummaryViewStyles()
    const book = props.book

    return (
        <Card className={classes.info}>
            <CardHeader
                className={classes.header}
                title={book.name}
                subheader={<>
                    <span>by: {book.writer}</span>
                    <div>published: {new Date(book.date_published * 1000).toDateString()}</div>
                </>}
            />
            <CardContent >
                <Typography className={classes.content} align={'center'} variant={'subtitle1'}> Summary </Typography>
                <GridList col={1} cellHeight={'auto'} className={classes.gridList}>
                    <Typography className={classes.summary} variant={'body1'}> {book.summary} </Typography>
                </GridList>
            </CardContent>
        </Card>
    )
}

export default SummaryView