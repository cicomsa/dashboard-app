import * as React from 'react'
import { mount } from 'enzyme'
import TableComponent from '../components/TableComponent'
import response from '../data/response.json'

describe('TableComponent', () => {
  it('should have 8 columns', () => {
    const wrapper = mount(<TableComponent />)
    expect(wrapper.find('th').length).toEqual(8)
  })
})
