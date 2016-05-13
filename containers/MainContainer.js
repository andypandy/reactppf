import React from 'react'
import {connect} from 'react-redux'
import {addProperty, toggleShowDeletedProperties} from '../actions'
import Main from '../components/Main'

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

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default MainContainer
