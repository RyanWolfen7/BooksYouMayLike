import {
    fade,
    makeStyles
} from '@material-ui/core/styles';

export const NavStyles = makeStyles(theme => ({
    bar: {
        backgroundColor: '#ffff',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'block',
        color: 'black',
        width: '100%'
    },
    search: {
        position: 'relative',
        color: 'black',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('#FFF174', 0.15),
        '&:hover': {
            backgroundColor: fade('#FFF174', 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        color: 'black',
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDrawer: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));