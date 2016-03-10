import React from 'react'

const AddProperty = ({handleAddPropertyFormSubmit}) => (
  <div>
    <h1 onClick={()=>{
      console.log(handleAddPropertyFormSubmit)
    }}>Hey</h1>
    <input onChange={() => handleAddPropertyFormSubmit()} />
  </div>
)

export default AddProperty
