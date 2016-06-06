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
    expect(wrapper.find('#addUnitFormContainer').hasClass('hidden')).toEqual(true)
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
    expect(wrapper.find('#addUnitFormContainer').hasClass('hidden')).toEqual(false)
  })
  it('should handle cancelling adding a unit (close add unit form and clear it)', ()=>{
    props.handleCloseAddUnitForm = expect.createSpy()
    const wrapper = shallow(<PropertyComponent {...props} />)
    wrapper.find('#closeAddUnitForm').simulate('click', {preventDefault:()=>{}})
    expect(props.handleCloseAddUnitForm).toHaveBeenCalled()
  })
  it('should handle updating add unit form', ()=>{
    props.handleUpdateAddUnitForm = expect.createSpy()
    const wrapper = shallow(<PropertyComponent {...props} />)
    wrapper.find('#addUnitFormSF').simulate('change', {target:{value: 999}})
    expect(props.handleUpdateAddUnitForm).toHaveBeenCalledWith('SF', 999)
  })
  it('should handle adding a unit', ()=>{
    props.handleAddUnit = expect.createSpy()
    const wrapper = shallow(<PropertyComponent {...props} />)
    wrapper.find('#addUnitButton').simulate('click', {preventDefault:()=>{}})
    expect(props.handleAddUnit).toHaveBeenCalled()
  })
  it('should handle deleting a unit', ()=>{
    props.handleDeleteUnit = expect.createSpy()
    props.property.property_id = 123
    props.units = [{unit_id: 5}, {unit_id: 23}, {unit_id: 43}]
    const wrapper = shallow(<PropertyComponent {...props} />)
    wrapper.find('.deleteUnitButton').first().simulate('click', {preventDefault:()=>{}})
    expect(props.handleDeleteUnit).toHaveBeenCalledWith(123, 5)
  })
  it('should handle updating a unit\'s value', ()=>{
    props.handleUpdateUnit = expect.createSpy()
    props.units = [{unit_id: 5, SF: 10000, rent: 25000}, {unit_id: 23, SF: 500, rent: 450}]
    const wrapper = shallow(<PropertyComponent {...props} />)
    wrapper.find('.unit').first().find('input').first().simulate('change', {target:{value: 400}})
    expect(props.handleUpdateUnit).toHaveBeenCalledWith(5, 'rent', 400)
  }) 
})
