import expect from 'expect'
import reducer from './forms'

describe('reducers/add unit form', ()=>{
  it('should update add unit form value', ()=>{
    const expected = {rent: null, SF: 123}
    const initialState = {rent: null, SF: null}
    const action = {
      type: 'UPDATE_ADD_UNIT_FORM',
      payload: {
        key: 'SF',
        value: 123
      }
    }
    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  it('should clear add unit form', ()=>{
    const expected = {name: null, rent: null, SF: null}
    const initialState = {name: 'Residential', rent: 5, SF: 123}
    const actual = reducer(initialState, {type:'CLOSE_ADD_UNIT_FORM'})
    expect(actual).toEqual(expected)
  })
})
