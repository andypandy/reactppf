import React from 'react'
var Link = require('react-router').Link
import NavLinks from '../components/NavLinks'

class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }

  render() {
    const hey = 1
    const hey2 = {

    }
    const handleChange = (e) => {
      console.log(e)
    }

    const getDerivedValues = (property) => {

    }

    //cont intermediate

    return (
      <div>
        <h1>Main component</h1>

        <div>
          {this.props.children}
        </div>

        <p onClick={(e)=>{
          e.preventDefault()
          this.props.handleToggleShowDeletedProperties()
        }}>{this.props.show_deleted_properties ? 'Hide deleted' : 'Show deleted'}</p>

        <ul>
          {this.props.properties.map((property)=>
            <li key={property.property_id}><Link to={`/property/${property.property_id}`}>{property.name}</Link></li>
          )}
        </ul>

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
