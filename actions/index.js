import ReduxThunk from 'redux-thunk'

export const addProperty = () => {
  return {
    type: 'ADD_PROPERTY'
  }
}

export const updateProperty = (property_id, key, value) => {
  return {
    type: 'UPDATE_PROPERTY',
    payload: {
      property_id,
      key,
      value
    }
  }
}

export const deletePropertyAndUnits = (property_id, unit_ids) => {
  return dispatch => {
    unit_ids.forEach((unit_id)=>{
      dispatch(exports.deleteUnit(unit_id))
    })
    dispatch(exports.deleteProperty(property_id))
  }
}

export const deleteProperty = (property_id) =>{
  return {
    type: 'DELETE_PROPERTY',
    payload: {
      property_id
    }
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


