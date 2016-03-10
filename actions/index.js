export const addProperty = (property) => {
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
