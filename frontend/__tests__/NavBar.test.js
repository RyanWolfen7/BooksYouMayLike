import React from 'react'
import { shallow, mount } from 'enzyme'
import NavBar from '../src/components/NavBar/NavBar'
import NavBarMenu from '../src/components/NavBar/NavMenu'

let nav
let menu

describe('Snapshot testing', () => {

    beforeAll(() => {
        nav = shallow(<NavBar />)
        menu = shallow(<NavBarMenu />)
    })
    
    test('Nav to match snapshot', () => {
        expect(nav).toMatchSnapshot()
    })
    
    test('NavMenue to match snapshot', () => {
        expect(menu).toMatchSnapshot()
    })
})

describe('Component Functionality', () => {

    // console.log(shallow(<NavBar/>).debug())
    // console.log(shallow(<NavBarMenu/>).debug())

    const handleMenuClick = jest.fn()
    const handleMenuClose = jest.fn()
})