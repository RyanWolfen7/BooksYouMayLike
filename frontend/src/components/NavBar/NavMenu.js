import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

const NavMenu = ({ menuAnchor, handleMenuClose }) => {

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

export default NavMenu