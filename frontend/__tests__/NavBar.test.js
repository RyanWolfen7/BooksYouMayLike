import React from 'react'
import { shallow } from 'enzyme'
import NavBar from '../src/components/NavBar/NavBar'

let nav

beforeAll(() => {
    let nav = shallow(<NavBar />)
})

test('Nav to match snapshot', () => {
    expect(nav).toMatchSnapshot()
})