import React from 'react'
import {connect} from 'react-redux'
import {updateProperty} from '../actions'
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

  return {
    ui: state.ui,
    property: currentProperty,
    units: currentUnits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateProperty: (property_id, key, value) => {
      dispatch(updateProperty(property_id, key, value))
    },
    handleDeleteProperty: (property_id, unit_ids) => {
      dispatch(deletePropertyAndUnits(property_id, unit_ids))
      //Redirect to homepage
    },

    handleShowAddUnitForm: ()=>{},
    handleCloseAddUnitForm: ()=>{},

    handleAddUnit: (property_id, unit) => {
      dispatch(addUnitAndClose(property_id, unit))
    },

    handleDeleteUnit: (unit_id)=>{},
    handleUpdateUnit: (unit_id, key, value)=>{},
  }
}

const PropertyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyComponent)

export default PropertyContainer
