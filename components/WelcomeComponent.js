import React from 'react'

const WelcomeComponent = () => {
  return (
    <div>
      <p>Welcome message</p>
      <a href="#" onClick={(e)=>{
        e.preventDefault()
        //props.handleAddPropertyClick()
      }}>
        Add a property
      </a>
    </div>
  )
}

export default WelcomeComponent
