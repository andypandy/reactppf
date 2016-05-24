import React from 'react'
import {connect} from 'react-redux'
import {addPropertyThenRedirect, deletePropertyAndUnits} from '../actions'
import IndexComponent from '../components/IndexComponent'

const mapStateToProps = (state) => {
  return {
    showDeletedProperties: state.propertyList.showDeletedProperties,
    properties: state.properties,
    units: state.units
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddPropertyClick: ()=>{
      dispatch(addPropertyThenRedirect())
    },
    handleDeletePropertyClick: (property_id) => {
      dispatch(deletePropertyAndUnits(property_id))
    },
    handleToggleShowDeletedPropertiesClick: () => {
      dispatch(toggleShowDeletedProperties())
    }
  }
}

const IndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexComponent)

export default IndexContainer
