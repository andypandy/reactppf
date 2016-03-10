import React from 'react'

class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const hey = 1
    const handleChange = (e) => {
      console.log(e)
    }

    return (
      <div>
        <h1>Main component</h1>
        <ul>
          <li>Constants</li>
          {this.props.properties.map((property)=>
            <li key={property.property_id}>{property.name}</li>
          )}
          <li>New property</li>
        </ul>
        <div>
          {this.props.children}
        </div>
        <div>
          <form onSubmit={(e)=>{
            e.preventDefault()
            this.props.handleAddPropertyFormSubmit()
          }}>
          <h2>Add a property</h2>
          Label
          Address
          <input type="submit" value="Add property" />
          <input value={hey} onChange={handleChange} />
          </form>
        </div>
      </div>
    )
  }
}

export default Main
