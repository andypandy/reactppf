const initialState = {
  show_deleted_properties: false
}
const property_list = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_DELETED_PROPERTIES':
      return {
        show_deleted_properties: !state.show_deleted_properties
      }
    default:
      return state
  }
}

export default property_list

/*Tests

expect(toggle_show_deleted_properties)
to be opposite of whatever it was

*/
