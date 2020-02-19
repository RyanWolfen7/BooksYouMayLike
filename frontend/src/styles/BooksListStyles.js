import {
    makeStyles
} from '@material-ui/core/styles';

export const BookListStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '3rem 0 0',
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));