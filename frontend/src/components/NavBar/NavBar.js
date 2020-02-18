import React, { useState } from 'react'
import { AppBar, Typography, InputBase, Toolbar, IconButton } from '@material-ui/core'
import  SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu';
import { NavStyles } from '../../styles/NavBarStyles'
import NavMenu from './NavMenu'

const NavBar = ({children}) => {
    const classes = NavStyles()
    const [openMenu, setOpenMenu] = useState(false)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
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
                        onClick={handleMenu}
                    >
                        <MenuIcon/>
                    </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {NavMenu}
        </div>
    )
}

export default NavBar