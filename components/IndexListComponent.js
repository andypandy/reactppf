import React from 'react'
var Link = require('react-router').Link

const IndexListComponent = ({properties, handleAddPropertyClick}) => {

  return (
    <div>
      <h2 className="index-list-h2">Welcome back!</h2>
      <p className="index-list-p">Your properties <span className="index-property-list-add-properties-link">
        <a id="add_property" href="#" onClick={(e)=>{
          e.preventDefault()
          handleAddPropertyClick()
        }}>Add another property</a>
      </span></p>
      <ul id="index-property-list">
        {properties.map((property)=>
          <li className="listed_property" key={property.property_id}><Link to={`/property/${property.property_id}`}>{property.name ? property.name : 'New property'}</Link></li>
        )}
      </ul>
    </div>
  )
}

export default IndexListComponent
