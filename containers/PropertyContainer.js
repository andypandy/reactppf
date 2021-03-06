import React from 'react'
import {connect} from 'react-redux'
import {
  updateProperty, 
  deletePropertyAndUnits,
  showAddUnitForm,
  updateAddUnitForm, 
  closeAddUnitForm, 
  addUnitThenClose, 
  deleteUnit, 
  updateUnit
} from '../actions'
import PropertyComponent from '../components/PropertyComponent'

const getCurrentProperty = (properties, property_id)=> {
  return properties.filter((property)=>
    property.property_id == property_id
  )[0]
}

const getUnitsForProperty = (units, property) => {
  return units.filter((unit)=>
    property.units.indexOf(unit.unit_id) != -1
  )
}

const mapStateToProps = (state, ownProps) => {
  const currentProperty = getCurrentProperty(state.properties, ownProps.routeParams.property_id)
  const currentUnits = getUnitsForProperty(state.units, currentProperty)
  const propertyLinks = state.properties.map((property)=>{
    return {property_id: property.property_id, name: property.name}
  })

  return {
    forms: state.forms, 
    ui: state.ui,
    property: currentProperty,
    units: currentUnits,
    propertyLinks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateProperty: (property_id, key, value) => {
      dispatch(updateProperty(property_id, key, value))
    },
    handleDeleteProperty: (property_id, unit_ids) => {
      dispatch(deletePropertyAndUnits(property_id, unit_ids))
    },

    handleShowAddUnitForm: ()=>{
      dispatch(showAddUnitForm())
    },
    handleUpdateAddUnitForm: (key, value)=>{
      dispatch(updateAddUnitForm(key, value))
    },
    handleCloseAddUnitForm: ()=>{
      dispatch(closeAddUnitForm())
    },

    handleAddUnit: (property_id, name, rent, SF) => {
      dispatch(addUnitThenClose(property_id, name, rent, SF))
    },
    handleDeleteUnit: (property_id, unit_id)=>{
      dispatch(deleteUnit(property_id, unit_id))
    },
    handleUpdateUnit: (unit_id, key, value)=>{
      dispatch(updateUnit(unit_id, key, value))
    },
  }
}

const PropertyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyComponent)

export default PropertyContainer
