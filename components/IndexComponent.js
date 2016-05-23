import React from 'react'
var Link = require('react-router').Link
import NavLinks from '../components/NavLinks'
import WelcomeComponent from '../components/WelcomeComponent'
import IndexListComponent from '../components/IndexListComponent'

class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
    //console.log('props', props);
  }

  handleChange(e) {
    console.log(e)
  }

  render() {

    return (
      <div>
        <h1>Main component</h1>
        
        { !this.props.properties.length ? <WelcomeComponent /> : <IndexListComponent properties={this.props.properties} /> }
        
        <a onClick={(e)=>{
          e.preventDefault()
          this.props.handleAddPropertyClick()
        }}>Add property</a>



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
            <input onChange={this.handleChange} />
          </form>
        </div>
      </div>
    )
  }
}

export default IndexComponent
