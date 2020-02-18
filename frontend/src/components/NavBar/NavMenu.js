import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

const NavMenu = (props) => {
    const {openMenu, handleMenu } = props

    return (
        <Menu
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            id={'NavMenu'}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openMenu}
            onClose={handleMenu}
        >
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