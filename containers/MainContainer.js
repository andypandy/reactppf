import React from 'react'
import {connect} from 'react-redux'
import {addProperty} from '../actions'
import Main from '../components/Main'

const mapStateToProps = (state) => {
  return {
    properties: state.properties
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddPropertyFormSubmit: (property) => {
      console.log('add property')
      //dispatch(addProperty(property))
    }
  }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

//Main will have these props: `properties`, `handleAddPropertyFormSubmit`
export default MainContainer
