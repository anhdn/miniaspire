import React from 'react'
import { configure } from 'enzyme'
import UserInput from '../../components/UserInput'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('renders correctly without function handle change', () => {
  const tree = renderer
    .create(<UserInput />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
