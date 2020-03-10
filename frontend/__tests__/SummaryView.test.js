import React from 'react'
import { shallow } from 'enzyme'
import SummaryView from '../src/components/SummaryView/SummaryView'

let view

beforeAll(() => {
    view = shallow(<SummaryView />)
})

test('view to match snapshot', () => {
    expect(view).toMatchSnapshot()
})