import React from 'react'

const Property = ({property, handlePropertyInputChange}) => (
  <div>
    <label>Land cost {property.name}</label>
    <input
      value={property.name}
      onChange={(e)=>{
        handlePropertyInputChange(property.property_id, 'name', e.target.value)
      }}
    />

    <input
      value={property.landCost}
      onChange={(e)=>{
        handlePropertyInputChange(property.property_id, 'landCost', e.target.value)
      }}
    />

    <input
      value={property.landSF}
      onChange={(e)=>{
        handlePropertyInputChange(property.property_id, 'landSF', e.target.value)
      }}
    />

    <h2>Cost/SF: {property.landCost/property.landSF}</h2>
  </div>
)

export default Property
