import React from 'react'
import { withRouter } from 'react-router'
import { Menu, MenuItem } from '@material-ui/core'

const NavMenu = props => {
    const { menuAnchor, handleMenuClose, history } = props

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
            <MenuItem onClick={() => history.push('/addBook')}>
                Add Book To Your List
            </MenuItem>
        </Menu>
    )
}

export default withRouter(NavMenu)