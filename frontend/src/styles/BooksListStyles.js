import {
    makeStyles
} from '@material-ui/core/styles';

export const BookListStyles = makeStyles(theme => ({
    root: {
        padding: 10,
        flexGrow: 1
    },
    scrollList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    details: {
    },
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '85vh',
    },
    img: {
        flexGrow: 1,
        width: '100%',
        height: '100%'
    },
    loader: {
        position: 'fixed',
        top: '50%',
        left: '50%'
    }
}));