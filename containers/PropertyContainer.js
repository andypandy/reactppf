import React from 'react'
import {connect} from 'react-redux'
import {updateProperty} from '../actions'
import Property from '../components/Property'

const getCurrentProperty = (properties, property_id)=> {
  return properties.filter((property)=>
    property.property_id == property_id
  )[0]
}

const mapStateToProps = (state, ownProps) => {
  return {
    property: getCurrentProperty(state.properties, ownProps.routeParams.property_id)
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

//Property will have these props: `property`, `onPropertyInChange`

export default PropertyContainer
