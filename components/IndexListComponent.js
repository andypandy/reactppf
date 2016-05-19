import React from 'react'
var Link = require('react-router').Link

const IndexListComponent = ({properties}) => {
  console.log('ilc props', properties)

  return (
    <div>
      <p>Welcome back.</p>
      <ul>
        {properties.map((property)=>
          <li key={property.property_id}><Link to={`/property/${property.property_id}`}>{property.name}</Link></li>
        )}
      </ul>
    </div>
  )
}

export default IndexListComponent
