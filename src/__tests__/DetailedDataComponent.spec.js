import * as React from 'react'
import { mount } from 'enzyme'
import DetailedDataComponent from '../components/DetailedDataComponent'
import selectorsData from '../data/selectorsData.json'

const props = {
  options: selectorsData.filter_by.options
}

describe('DetailedDataComponent', () => {
  it('should have six children', () => {
    const wrapper = mount(<DetailedDataComponent {...props} />)
    expect(wrapper.find('.detailed-data').children().length).toEqual(6)
  })
})
