import 'babel-polyfill'
import expect from 'expect'
import * as actions from './index'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'


describe('actions', ()=>{
  it('should create an action to add a property then redirect to that property', ()=>{
    const middlewares = [ thunk ]
    const mockStore = configureMockStore(middlewares)

    const store = mockStore({})
    store.dispatch(actions.addPropertyThenRedirect())
    const actualCompletedActions = store.getActions()
    const actualAddPropertyAction = actualCompletedActions[0]
    const actualRedirectAction = actualCompletedActions[1]

    expect(actualAddPropertyAction.type).toEqual('ADD_PROPERTY')
    expect(actualAddPropertyAction.payload.property_id).toNotBe(null)
    expect(actualRedirectAction.payload.args[0]).toBe('/property/' + actualAddPropertyAction.payload.property_id)
  })

  it('should create an action to add a property', ()=>{
    const actual = actions.addProperty()
    expect(actual.type).toEqual('ADD_PROPERTY')
    expect(actual.payload.property_id).toNotBe(null)
  })

  it('should create an action to update a property\'s value', ()=>{
    const expected = {
      type: 'UPDATE_PROPERTY',
      payload: {
        property_id: 5,
        key: 'downPaymentRate',
        value: .2
      }
    }
    const actual = actions.updateProperty(5, 'downPaymentRate', .2)
    expect(actual).toEqual(expected)
  })

  it('should create an action to delete property and it\s units', ()=>{
    const middlewares = [ thunk ]
    const mockStore = configureMockStore(middlewares)
    const expectedActions = [
      { type: 'DELETE_UNIT', payload: {unit_id: 3}},
      { type: 'DELETE_UNIT', payload: {unit_id: 453}},
      { type: 'DELETE_UNIT', payload: {unit_id: 133}},
      { type: 'DELETE_UNIT', payload: {unit_id: 323}},
      { type: 'DELETE_PROPERTY', payload: {property_id: 28} }
    ]
    const store = mockStore({})
    const property_id = 28
    const unit_ids = [3, 453, 133, 323]
    store.dispatch(actions.deletePropertyAndUnits(property_id, unit_ids))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should create an action to delete a property', ()=>{
    const expected = {
      type: 'DELETE_PROPERTY',
      payload: {
        property_id: 3843
      }
    }
    const actual = actions.deleteProperty(3843)
    expect(actual).toEqual(expected)
  })

  it('should create an action to toggle showing deleted properties', ()=>{
    const expected = {
      type: 'TOGGLE_SHOW_DELETED_PROPERTIES'
    }
    const actual = actions.toggleShowDeletedProperties()
    expect(actual).toEqual(expected)
  })

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
    const middlewares = [ thunk ]
    const mockStore = configureMockStore(middlewares)

    const expectedActions = [
      { type: 'ADD_UNIT', payload: {property_id: 5, rent: 1200, SF: 10000} },
      { type: 'CLOSE_ADD_UNIT_FORM' }
    ]
    const store = mockStore({})
    store.dispatch(actions.addUnitThenClose(5, 1200, 10000))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
