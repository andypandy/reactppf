const initialState = {
  showAddUnitForm: false
}

const ui = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_ADD_UNIT_FORM':
      return {showAddUnitForm: true}
    case 'HIDE_ADD_UNIT_FORM':
      return {showAddUnitForm: false}
    default:
      return state
  }
}

export default ui
