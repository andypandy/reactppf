import ReduxThunk from 'redux-thunk'
import { push } from 'react-router-redux'

//Random ID generator
function makeId(){
  return Math.random().toFixed(10).slice(-10)
}

export const addPropertyThenRedirect = ()=>{
  return dispatch=>{
    const property_id = makeId()
    dispatch(exports.addProperty(property_id))
    dispatch(push('/property/' + property_id))
  }
}

export const addProperty = (property_id) => {
  return {
    type: 'ADD_PROPERTY',
    payload: {
      property_id
    }
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

export const addUnitThenClose = (property_id, rent, SF) => {
  return dispatch => {
    const unit_id = makeId()
    dispatch(exports.addUnit(unit_id, property_id, rent, SF))
    dispatch(exports.closeAddUnitForm())
  }
}

export const addUnit = (unit_id, property_id, rent, SF) => {
  return {
    type: 'ADD_UNIT',
    payload: {
      unit_id,
      property_id,
      rent,
      SF
    }
  }
}

export const updateUnit = (unit_id, key, value) => {
  return {
    type: 'UPDATE_UNIT',
    payload: {
      unit_id,
      key,
      value
    }
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


