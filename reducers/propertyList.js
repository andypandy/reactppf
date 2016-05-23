const initialState = {
  showDeletedProperties: false
}
const propertyList = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_DELETED_PROPERTIES':
      return {
        showDeletedProperties: !state.showDeletedProperties
      }
    default:
      return state
  }
}

export default propertyList
