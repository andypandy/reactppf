import React from 'react'

const WelcomeComponent = ({handleAddPropertyClick}) => {
  return (
    <div>
      <p className="welcome-message">Welcome to React Pro Forma. <br /><span className="fake-input">Form fields in blue are inputs.</span> Fill them all out before looking at calculated numbers. <br />To get started, <a href="#" id="welcome-add-property" onClick={(e)=>{
        e.preventDefault()
        handleAddPropertyClick()
      }}>add a property</a>.</p>
    </div>
  )
}

export default WelcomeComponent
