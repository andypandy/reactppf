import React from 'react'
import {connect} from 'react-redux'
import {updateProperty} from '../actions'
import Property from '../components/Property'

const getCurrentProperty = (properties, property_id)=> {
  return properties.filter((property)=>
    property.property_id == property_id
  )[0]
}

const getUnitsForProperty = (units, property) => {
  return units.filter((unit)=>{
    console.log(property)
    property.units.indexOf(unit.unit_id) != -1
  })
}

const mapStateToProps = (state, ownProps) => {
  console.log('state', state);
  let currentProperty = getCurrentProperty(state.properties, ownProps.routeParams.property_id)
  let currentUnits = getUnitsForProperty(state.units, currentProperty)

  console.log('units', currentUnits)

  return {
    property: currentProperty,
    units: currentUnits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePropertyInputChange: (property_id, key, value) => {
      dispatch(updateProperty(property_id, key, value))
    }
  }
}

const PropertyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Property)

export default PropertyContainer
