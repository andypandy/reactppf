import actions from '../actions'

const initialState = {
  rent: null,
  SF: null
}

const forms = (state = initialState, action)=>{
  switch(action.type) {
    case 'UPDATE_ADD_UNIT_FORM':
      return Object.assign({}, initialState, {
        [action.payload.key]: action.payload.value
      })
    case 'CLOSE_ADD_UNIT_FORM':
      return initialState
    default:
      return state
  }
}

export default forms
