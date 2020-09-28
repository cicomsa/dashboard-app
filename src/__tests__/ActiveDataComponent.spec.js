import * as React from 'react'
import { mount } from 'enzyme'
import ActiveDataComponent from '../components/ActiveDataComponent'
import response from '../data/response.json'

const props = {
  type: 'weekly-active',
  title: 'Weekly active',
  currentPeriodData: response.data.weekly_active.current_period,
  lastPeriodData: response.data.weekly_active.last_period
}

describe('ActiveDataComponent', () => {
  it('should match content', () => {
    const wrapper = mount(<ActiveDataComponent {...props} />)
    expect(wrapper.find('.active-data__title').text()).toEqual(props.title)
    expect(wrapper.find('.active-data__current-period').text()).toEqual(props.currentPeriodData.toString())
    expect(wrapper.find('.active-data__last-period').text()).toEqual(props.lastPeriodData + ' Last Period')
  })
})
