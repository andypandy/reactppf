import React from 'react'
var Link = require('react-router').Link

const IndexListComponent = ({properties, handleAddPropertyClick}) => {

  return (
    <div>
      <p>Welcome back.</p>
      <ul>
        {properties.map((property)=>
          <li className="listed_property" key={property.property_id}><Link to={`/property/${property.property_id}`}>{property.name}</Link></li>
        )}
      </ul>
      <a id="add_property" onClick={(e)=>{
        e.preventDefault()
        handleAddPropertyClick()
      }}>Add property</a>
    </div>
  )
}

export default IndexListComponent
