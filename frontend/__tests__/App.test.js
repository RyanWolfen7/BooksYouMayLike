import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/components/App/App'

let app

beforeAll(() => {
    app = shallow(<App />)
})

test('App to match snapshot', () => {
    expect(app).toMatchSnapshot()
})