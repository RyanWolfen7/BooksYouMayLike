import {
    makeStyles
} from '@material-ui/core/styles';

export const BookListStyles = makeStyles(theme => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em',
            backgroundColor: '#F5F5F5'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
            backgroundColor: '#FFFFFF'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#FFF174',
            border: '0.5px solid grey'
        }
    },
    root: {
        padding: 15,
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
    header: {
        color: 'black',
        backgroundColor: '#FFF174',
        width: '100%'
    },
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '85vh',
    },
    img: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    loader: {
        position: 'fixed',
        top: '50%',
        left: '50%'
    }
}));