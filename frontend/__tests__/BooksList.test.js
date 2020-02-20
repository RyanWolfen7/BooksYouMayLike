import React from 'react'
import { shallow } from 'enzyme'
import BooksList from '../src/components/BooksList/BooksList'

let List

beforeAll(() => {
    List = shallow(<BooksList />)
})

test('List to match snapshot', () => {
    expect(List).toMatchSnapshot()
})