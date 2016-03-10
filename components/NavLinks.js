import React from 'react'

const NavLinks = (properties) => (
  <ul>
    <li>Constants</li>
    {properties.map((property)=>
      <li key={property.id}>{property.nickname}</li>
    )}
    <li>New property</li>
  </ul>
)

export default NavLinks
