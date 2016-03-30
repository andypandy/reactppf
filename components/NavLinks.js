import React from 'react'
var Link = require('react-router').Link

const NavLinks = (props) => (
  <ul>
    <li>Constants</li>
    {console.log(props)}
    {props.properties.map((property)=>
      <li key={property.property_id}><Link to={`/property/${property.property_id}`}>{property.name}</Link></li>
    )}
    <li>New property</li>
  </ul>
)

export default NavLinks
