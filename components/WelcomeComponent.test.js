import React from 'react';
import expect from 'expect'
import { mount, shallow } from 'enzyme';
import WelcomeComponent from './WelcomeComponent'

describe('components/WelcomeComponent', ()=>{
  it('should handle clicking "add new property" link', ()=>{
    const handleAddPropertyClick = expect.createSpy()
    const wrapper = shallow(<WelcomeComponent 
      handleAddPropertyClick={handleAddPropertyClick} 
    />)
    wrapper.find('#add_property').simulate('click', {preventDefault: ()=>{}})
    expect(handleAddPropertyClick).toHaveBeenCalled()
  })

})
