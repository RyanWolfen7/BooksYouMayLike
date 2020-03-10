import {
    makeStyles
} from '@material-ui/core/styles';

export const SummaryViewStyles = makeStyles(theme => ({
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
        padding: 10,
        flexGrow: 1
    },
    info: {
        height: '88vh'
    },
    summary: {
        flexGrow: 1,
        padding: '10px',
        width: '100%'
    },
    content: {
        padding: '1rem 0 1rem'
    },
    header: {
        backgroundColor: '#FFF174'
    },
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '40vh',
    },
}));