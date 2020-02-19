import React, { useState } from 'react'
import { AppBar, Typography, InputBase, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core'
import  SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu';
import { NavStyles } from '../../styles/NavBarStyles'

const NavBar = ({children}) => {
    const classes = NavStyles()
    const [menuAnchor, setMenuAnchor] = useState(null)

    const handleMenuClick = event => {
        setMenuAnchor(event.currentTarget)
    }

    const handleMenuClose = () => {
        setMenuAnchor(null)
    }

    const NavMenu = () => {

        return (
            <Menu
                id={'NavMenu'}
                anchorEl={menuAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(menuAnchor)}
                onClose={handleMenuClose}
            >
                {
                    // add real items later 
                }
                <MenuItem>
                <h1>Hello</h1>
                </MenuItem>
                <MenuItem>
                <h2>World</h2>
                </MenuItem>
            </Menu>
        )
    }

    return (
        <div className={classes.grow}>
            <AppBar position='static' className={classes.bar}>
                <Toolbar>
                    <Typography variant='h5' className={classes.title} noWrap>
                        Perlego
                    </Typography>
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
            {NavMenu()}
        </div>
    )
}

export default NavBar