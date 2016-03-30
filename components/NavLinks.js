import React from 'react'

const NavLinks = (props) => (
  <ul>
    <li>Constants</li>
    {console.log(props)}
    {props.properties.map((property)=>
      <li key={property.id}>{property.name}</li>
    )}
    <li>New property</li>
  </ul>
)

export default NavLinks
