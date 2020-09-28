import * as React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils';
import DataComponent, { getData } from '../components/DataComponent'
import ActiveDataComponent from '../components/ActiveDataComponent'
import response from '../data/response.json'

const props = {
  filtered_by: "this_month"
}

getData: jest.fn().mockImplementation(payload => Promise.resolve(response))

describe('DataComponent', () => {
  it('should have three ActiveDataComponent components', async () => {
    const payload = {
      "time_unit": "MONTH",
      "time_unit_count": 1
    }
    const wrapper = mount(<DataComponent {...props} />)
    await act(() => getData(payload))
    wrapper.update()
    expect(wrapper.find(ActiveDataComponent).length).toEqual(3)
  })
})
