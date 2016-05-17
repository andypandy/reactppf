import ReduxThunk from 'redux-thunk'

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

export const toggleShowDeletedProperties = () => {
  return {
    type: 'TOGGLE_SHOW_DELETED_PROPERTIES'
  }
}

export const showAddUnitForm = () => {
  return {
    type: 'SHOW_ADD_UNIT_FORM'
  }
}

export const closeAddUnitForm = ()=> {
  return {
    type: 'CLOSE_ADD_UNIT_FORM'
  }
}

export const addUnit = (property_id, rent, SF) => {
  return {
    type: 'ADD_UNIT',
    payload: {
      property_id: property_id,
      rent: rent,
      SF: SF
    }
  }
}

export const addUnitThenClose = (property_id, rent, SF) => {
  return dispatch => {
    dispatch(exports.addUnit(property_id, rent, SF))
    dispatch(exports.closeAddUnitForm())
  }
}

export const deleteUnit = (unit_id)=>{
  return {
    type: 'DELETE_UNIT',
    payload: {
      unit_id: unit_id
    }
  }
}


