import 'babel-polyfill'
import expect from 'expect'
import reducer from './units'

describe('reducers/units', ()=>{
  it('should handle adding a unit', ()=>{
    const expected = [{
      unit_id: 123,
      property_id: 5,
      rent: 234,
      SF: 55555
    }]
    const actual = reducer([], {
      type: 'ADD_UNIT',
      payload: {
        unit_id: 123,
        property_id: 5,
        rent: 234,
        SF: 55555
      }
    })
    expect(actual).toEqual(expected)
  })
  it('should handle deleting a unit', ()=>{
    const initialState = [{unit_id: 5}, {unit_id: 123}]
    const expected = [{unit_id: 5}]
    const actual = reducer(initialState, {type: 'DELETE_UNIT', payload: {unit_id: 123}})
    expect(actual).toEqual(expected)
  })

  it('should handle updating a unit\'s value', ()=>{
    const expected = [{unit_id: 56, rent: 123123, SF: 123}]
    const initialState = [{unit_id: 56, rent: 123123, SF: 5}]
    const actual = reducer(initialState, {
      type: 'UPDATE_UNIT',
      payload: {
        unit_id: 56,
        key: 'SF',
        value: 123
      }
    })
    expect(actual).toEqual(expected);
  })
})
