import React from 'react';
import expect from 'expect'
import { mount, shallow } from 'enzyme';
import IndexListComponent from './IndexListComponent'

describe('components/IndexListComponent', ()=>{
  it('should display the correct number of properties', ()=>{
    const properties = [{property_id: 1}, {property_id: 2}, {property_id: 5}]
    const wrapper = mount(<IndexListComponent properties={properties} />)
    expect(wrapper.find('li').length).toEqual(3)
  })

  it('should handle clicking "add new property" link')
})
