import expect from 'expect'
import reducer from './forms'

describe('reducers/add unit form', ()=>{
  it('should update add unit form value', ()=>{
    const expected = {name: '', rent: '', SF: 123}
    const initialState = {name: '',rent: '', SF: ''}
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
    const expected = {name: '', rent: '', SF: ''}
    const initialState = {name: 'Residential', rent: 5, SF: 123}
    const actual = reducer(initialState, {type:'CLOSE_ADD_UNIT_FORM'})
    expect(actual).toEqual(expected)
  })
})
