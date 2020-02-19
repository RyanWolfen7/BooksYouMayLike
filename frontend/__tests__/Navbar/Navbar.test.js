import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'
import NavBar from '../../src/components/NavBar/NavBar'
import { InputBase, IconButton} from '@material-ui/core'
import  SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'

configure({adapter: new Adapter()});

// Array Destructuring for mock functions
let [ handleMenuClick, handleMenuClose, NavMenu ] = new Array(3).fill(jest.fn())


describe('Shallow rendered NavBar', () => {
    const props = {}
    const enzymeWrapper = shallow(<NavBar {...props}/>)

    // console.log(enzymeWrapper.debug())
    it('should render a navbar with title', () => {
        expect(enzymeWrapper.find('.makeStyles-title-4').text()).toBe('Perlego')
    }),
    it('should render a search bar Icon', () => {
        expect(enzymeWrapper.containsMatchingElement(<SearchIcon/>)).toBe(true)
    }),
    it('should have a search input field', () => {
        expect(enzymeWrapper.containsMatchingElement(<InputBase/>)).toBe(true)
    }),
    it('should render a hamburger', () => {
        expect(enzymeWrapper.containsMatchingElement(<IconButton><MenuIcon/></IconButton>)).toBe(true)
    })
})



