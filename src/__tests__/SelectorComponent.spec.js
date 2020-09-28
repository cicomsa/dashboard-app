import * as React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils';
import SelectorComponent from '../components/SelectorComponent'
import selectorsData from '../data/selectorsData.json'

const props = {
  title: 'This month',
  type: 'filter_by',
  options: selectorsData.filter_by.options,
  value: { filter_by: 'this_month', sort_by: 'id' },
  setValue: jest.fn().mockReturnValue(() => ({ filter_by: 'last_month', sort_by: 'id' }))
}

const useStateSpy = jest.spyOn(React, 'useState')
useStateSpy.mockImplementation((init) => [init, props.setValue]);

describe('SelectorComponent', () => {
  it('should have 6 options', () => {
    const wrapper = mount(<SelectorComponent {...props} />)
    expect(wrapper.find('option').length).toEqual(6)
  })
  it('should change set value on selector change behaviour', () => {
    const wrapper = mount(<SelectorComponent {...props} />)
    const select = wrapper.find('select')
    select.simulate('change', { target: { value: 'last_month' } })

    expect(props.setValue).toHaveBeenCalledWith({ filter_by: 'last_month', sort_by: 'id' })
  })
})
