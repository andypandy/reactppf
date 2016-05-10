export const addProperty = (property) => {
  console.log('added property', property)
  return {
    type: 'ADD_PROPERTY',
    property
  }
}

export const updateProperty = (property_id, key, value) => {
  return {
    type: 'UPDATE_PROPERTY',
    property_id,
    key,
    value
  }
}

export const toggleShowDeletedProperties = () => {
  return {
    type: 'TOGGLE_SHOW_DELETED_PROPERTIES'
  }
}
