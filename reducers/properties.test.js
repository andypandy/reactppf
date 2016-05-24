import 'babel-polyfill'
import expect from 'expect'
import reducer from './properties'
import actions from '../actions/index'

describe('reducers/properties', ()=>{
  it('should handle adding a property', ()=>{
    const expected = [{property_id:1}]
    const actual = reducer([], {
      type: 'ADD_PROPERTY',
      property: {
        property_id: 1
      }
    })

    expect(actual).toEqual(expected)
  })

  it('should update a property\'s value', ()=>{
    let initialState = [{property_id:1, landCost: 100}]
    let expected = [{property_id:1, landCost: 100000}]
    let actual = reducer(initialState, {
      type: 'UPDATE_PROPERTY',
      property_id: 1,
      key: 'landCost',
      value: 100000
    })
    expect(actual).toEqual(expected)
  })

  it('should delete a property', ()=>{
    let initialState = [{property_id:1}, {property_id:2}]
    let expected = [{property_id:1}]
    let actual = reducer(initialState, {
      type: 'DELETE_PROPERTY',
      property_id: 2
    })
    expect(actual).toEqual(expected)
  })

  it('should add a unit\'s id to a property', ()=>{
    let initialState = [{property_id: 234, units: [4]}]
    let expected = [{property_id: 234, units: [4, 5]}]
    let actual = reducer(initialState, {
      type: 'ADD_UNIT',
      property_id: 234,
      unit_id: 5
    })
  })

  it('should delete a unit\'s id from a property', ()=>{
    let initialState = [{property_id: 234, units: [4, 5]}]
    let expected = [{property_id: 234, units: [5]}]
    let actual = reducer(initialState, {
      type: 'DELETE_UNIT',
      property_id: 234,
      unit_id: 4
    })
  })
})
