import React from 'react'
import {connect} from 'react-redux'
import {addProperty, toggleShowDeletedProperties} from '../actions'
import IndexComponent from '../components/IndexComponent'

const mapStateToProps = (state) => {
  return {
    show_deleted_properties: state.property_list.show_deleted_properties,
    properties: state.properties,
    units: state.units
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddPropertyFormSubmit: (property) => {
      console.log('add property')
      dispatch(addProperty(property))
    },
    handleToggleShowDeletedProperties: () => {
      dispatch(toggleShowDeletedProperties())
    }
  }
}

const IndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexComponent)

export default IndexContainer
