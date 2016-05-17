import 'babel-polyfill'
import expect from 'expect'
import * as actions from './index'


import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


describe('actions', ()=>{
  it('should create an action to show the add unit form', ()=>{
    const expected = {
      type: 'SHOW_ADD_UNIT_FORM'
    }
    const actual = actions.showAddUnitForm()
    expect(actual).toEqual(expected)
  })

  it('should create an action to clear and close the add unit form', ()=>{
    const expected = {
      type: 'CLOSE_ADD_UNIT_FORM'
    }
    const actual = actions.closeAddUnitForm()
    expect(actual).toEqual(expected)
  })

  it('should create an action to add a unit', ()=>{
    const expected = {
      type: 'ADD_UNIT',
      payload: {
        property_id: 5,
        rent: 300,
        SF: 1234
      }
    }
    const property_id = 5
    const rent = 300
    const SF = 1234
    const actual = actions.addUnit(property_id, rent, SF)
    expect(actual).toEqual(expected)

  })
  it('should create an action to delete a unit', ()=>{
    const expected = {
      type: 'DELETE_UNIT',
      payload: {
        unit_id: 5
      }
    }
    const unit_id = 5
    const actual = actions.deleteUnit(unit_id)
    expect(actual).toEqual(expected)
  })

  it('should create an action that dispatch add unit and close/clear form', ()=>{
    const expectedActions = [
      { type: 'ADD_UNIT', payload: {property_id: 5, rent: 1200, SF: 10000} },
      { type: 'CLOSE_ADD_UNIT_FORM' }
    ]
    const store = mockStore({})
    store.dispatch(actions.addUnitThenClose(5, 1200, 10000))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
