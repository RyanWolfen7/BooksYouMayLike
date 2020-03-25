import {
    makeStyles
} from '@material-ui/core/styles';

export const MainViewStyles = makeStyles(theme => ({
    root: {
        padding: 10,
        flexGrow: 1
    },
    details: {
        display: 'flex',
        flexWrap: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF174',
        height: '85vh'
    },
    card: {
        display: 'flex',
        flex: 'auto',
        flexWrap: 'column',
        height: '75vh'
    },
    cardContent: {
        flexGrow: 1,
        width: '100%',
    },
    img: {
        flexGrow: 1,
        width: 'inherit'
    },
    gridImg: {
        objectFit: 'cover'
    },
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '25vh',
    },
    summary: {
        flexGrow: 1,
        padding: '10px',
        width: '100%',
        height: '100%'
    }
}));