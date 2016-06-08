import actions from '../actions'

const initialState = {
  name: '',
  rent: '',
  SF: ''
}

const forms = (state = initialState, action)=>{
  console.log(action)
  switch(action.type) {
    case 'UPDATE_ADD_UNIT_FORM':
      return Object.assign({}, state, {
        [action.payload.key]: action.payload.value
      })
    case 'CLOSE_ADD_UNIT_FORM':
      return initialState
    default:
      return state
  }
}

export default forms
