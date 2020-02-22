import React, { useState } from 'react'
import { AppBar, Typography, InputBase, Toolbar, IconButton, Link } from '@material-ui/core'
import  SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu';
import { NavStyles } from '../../styles/NavBarStyles'
import NavMenu from './NavMenu'

const NavBar = ({children}) => {
    const classes = NavStyles()
    const [menuAnchor, setMenuAnchor] = useState(null)

    const handleMenuClick = event => {
        setMenuAnchor(event.currentTarget)
    }

    const handleMenuClose = () => {
        setMenuAnchor(null)
    }

    return (
        <div className={classes.grow}>
            <AppBar position='static' className={classes.bar}>
                <Toolbar>
                    <Typography variant='h5' className={classes.title} noWrap>
                        <Link className={classes.homeLink} href='https://www.perlego.com/' color='inherit'>
                            Perlego
                        </Link>
                    </Typography>
                    {/* Refactor to new component when implimenting Functionality */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.sectionDrawer}>
                    <IconButton
                        id='NavMenuButton' 
                        aria-label='open drawer'
                        aria-controls='NavMenu'
                        aria-haspopup='true'
                        onClick={handleMenuClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {NavMenu({menuAnchor, handleMenuClose})}
        </div>
    )
}

export default NavBar