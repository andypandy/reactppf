import React from 'react'

const WelcomeComponent = ({handleAddPropertyClick}) => {
  return (
    <div>
      <p>Welcome message</p>
      <a id="add_property" onClick={(e)=>{
        e.preventDefault()
        handleAddPropertyClick()
      }}>Add property</a>
    </div>
  )
}

export default WelcomeComponent
