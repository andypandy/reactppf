import React from 'react';
import expect, {createSpy} from 'expect'
import { mount, shallow, render } from 'enzyme';
import IndexComponent from './IndexComponent'
import WelcomeComponent from '../components/WelcomeComponent'
import IndexListComponent from '../components/IndexListComponent'

describe('components/IndexComponent', ()=>{
  it('should have the proper properties', ()=>{
    const showDeletedProperties = false
    const properties = [{property_id: 1}, {property_id: 2}, {property_id: 5}]
    const units = [{unit_id: 5}]
    const handleAddPropertyClick = ()=>{}
    const handleDeletePropertyClick = ()=>{}
    const wrapper = mount(<IndexComponent 
      showDeletedProperties={showDeletedProperties} 
      properties={properties} 
      units={units} 
      handleAddPropertyClick={handleAddPropertyClick} 
      handleDeletePropertyClick={handleDeletePropertyClick} 
    />)
    expect(wrapper.props().hasOwnProperty('showDeletedProperties')).toEqual(true)
    expect(wrapper.props().hasOwnProperty('properties')).toEqual(true)
    expect(wrapper.props().hasOwnProperty('units')).toEqual(true)
    expect(wrapper.props().hasOwnProperty('handleAddPropertyClick')).toEqual(true)
    expect(wrapper.props().hasOwnProperty('handleDeletePropertyClick')).toEqual(true)
  })
  it('should show welcome message if there aren\'t any properties', ()=>{    
    const showDeletedProperties = false
    const properties = []
    const units = []
    const handleAddPropertyClick = ()=>{}
    const handleDeletePropertyClick = ()=>{}
    const wrapper = mount(<IndexComponent 
      showDeletedProperties={showDeletedProperties} 
      properties={properties} 
      units={units} 
      handleAddPropertyClick={handleAddPropertyClick} 
      handleDeletePropertyClick={handleDeletePropertyClick} 
    />)
    expect(wrapper.contains(<WelcomeComponent />)).toEqual(true)
  })
  it('should show list of properties if there are properties', ()=>{
    const showDeletedProperties = false
    const properties = [{property_id: 182736}]
    const units = []
    const handleAddPropertyClick = ()=>{}
    const handleDeletePropertyClick = ()=>{}
    const wrapper = mount(<IndexComponent 
      showDeletedProperties={showDeletedProperties} 
      properties={properties} 
      units={units} 
      handleAddPropertyClick={handleAddPropertyClick} 
      handleDeletePropertyClick={handleDeletePropertyClick} 
    />)
    expect(wrapper.contains(<IndexListComponent properties={properties} />)).toEqual(true)
  })
  it('should handle clicking "add new property" link', ()=>{
    const showDeletedProperties = false
    const properties = [{property_id: 182736}]
    const units = []
    const handleAddPropertyClick = expect.createSpy()
    const handleDeletePropertyClick = ()=>{}
    const wrapper = shallow(<IndexComponent 
      showDeletedProperties={showDeletedProperties} 
      properties={properties} 
      units={units} 
      handleAddPropertyClick={handleAddPropertyClick} 
      handleDeletePropertyClick={handleDeletePropertyClick} 
    />)
    wrapper.find('a').simulate('click', {preventDefault: ()=>{}})
    expect(handleAddPropertyClick).toHaveBeenCalled()
  })
})
