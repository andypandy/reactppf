import React from 'react';
import expect from 'expect'
import { mount, shallow } from 'enzyme';
import PropertyComponent from './PropertyComponent'

describe('components/PropertyComponent', ()=>{
  const props = {}

  beforeEach(()=>{
    props.forms = {}
    props.ui = {showAddUnitForm: false}
    props.property = {}
    props.units = []
    props.handleUpdateProperty = ()=>{}
    props.handleDeleteProperty = ()=>{}
    props.handleShowAddUnitForm = ()=>{}
    props.handleCloseAddUnitForm = ()=>{}
    props.handleAddUnit = ()=>{}
    props.handleDeleteUnit = ()=>{}
    props.handleUpdateUnit = ()=>{}
    props.handleUpdateAddUnitForm = ()=>{}
    props.handleClearAddUnitForm = ()=>{}
  })

  it('should handle updating a value', ()=>{
    props.handleUpdateProperty = expect.createSpy()
    const wrapper = shallow(<PropertyComponent {...props} />)
    wrapper.find('#landCost').simulate('change', {preventDefault:()=>{}, target: {value: 5}})
    expect(props.handleUpdateProperty).toHaveBeenCalled()
  })

  it('should show a list of units', ()=>{
    props.units = [
      {unit_id: 5, rent: 500, SF: 900}, 
      {unit_id: 5, rent: 650, SF: 950}, 
      {unit_id: 17, rent: 999, SF: 1923}
    ]
    const wrapper = shallow(<PropertyComponent {...props} />)
    const actual = wrapper.find('li .unit').length
    const expected = 3
    expect(actual).toEqual(expected)
  })
  it('should hide add unit form at first', ()=>{
    const wrapper = shallow(<PropertyComponent {...props} />)
    expect(wrapper.find('#addUnitForm').hasClass('hidden')).toEqual(true)
  })
  it('should handle showing the add unit form', ()=>{
    //Handler to have been called
    props.handleShowAddUnitForm = expect.createSpy()
    const wrapper = shallow(<PropertyComponent {...props} />)
    wrapper.find('#showAddUnitFormButton').simulate('click', {preventDefault:()=>{}})
    expect(props.handleShowAddUnitForm).toHaveBeenCalled()
  })
  it('should show add unit form', ()=>{
    props.ui.showAddUnitForm = true
    const wrapper = shallow(<PropertyComponent {...props} />)
    expect(wrapper.find('#addUnitForm').hasClass('hidden')).toEqual(false)
  })
  it('should handle cancelling adding a unit (close add unit form and clear it)')
  it('should handle adding a unit', ()=>{
    //Handler to have been called
    //Show new unit
  })
  xit('should handle deleting a unit')
  xit('should handle updating a unit\'s value')
})
