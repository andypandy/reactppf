import 'babel-polyfill'
import expect from 'expect'
import reducer from './ui'

describe('reducers/ui', ()=>{
  it('should show add unit form', ()=>{
    const initialState = {
      showAddUnitForm: false
    }
    const expected = {showAddUnitForm: true}
    const actual = reducer(initialState, {type: 'SHOW_ADD_UNIT_FORM'})
    expect(actual).toEqual(expected)
  })

  it('should hide add unit form', ()=>{
    const initialState = {
      showAddUnitForm: true
    }
    const expected = {showAddUnitForm: false}
    const actual = reducer(initialState, {type: 'HIDE_ADD_UNIT_FORM'})
    expect(actual).toEqual(expected)
  })
})
 
