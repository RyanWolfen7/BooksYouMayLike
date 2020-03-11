import {
    makeStyles
} from '@material-ui/core/styles';

export const EditBookStyles = makeStyles(theme => ({
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
    container: {
        display: 'flex',
        flexWrap: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF174',
        height: '85vh'
    },
    paper: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        margin: 'auto'
    },
    form: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        margin: 'auto',
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '41.5vw',
            flexGrow: 1
        }
    },
    summary: {
        flexGrow: 1
    },
    save: {
        backgroundColor: '#1A76D2',
        color: 'white',
        margin: '.5rem'
    },
    delete: {
        backgroundColor: 'red',
        color: 'white',
        margin: '.5rem'
    }
}));