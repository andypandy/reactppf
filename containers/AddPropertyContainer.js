import React from 'react'
import {connect} from 'react-redux'
import {addProperty} from '../actions'
import AddProperty from '../components/AddProperty'

const mapStateToProps = (state) => {
  return {
    cool:'stuff'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      console.log('onlcikc')
    },
    handleAddPropertyFormSubmit: () => {
      console.log('heyo!')
      //dispatch(updateProperty(property_id, key, value))
    }
  }
}

const AddPropertyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProperty)

export default AddPropertyContainer
