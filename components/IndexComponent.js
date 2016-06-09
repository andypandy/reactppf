import React from 'react'
import WelcomeComponent from '../components/WelcomeComponent'
import IndexListComponent from '../components/IndexListComponent'

class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1>React Pro Forma</h1>
        <p className="h1">Dead simple real estate pro formas</p>
        
        { !this.props.properties.length ? 
          <WelcomeComponent 
            handleAddPropertyClick={this.props.handleAddPropertyClick} 
          /> : 
          <IndexListComponent 
            properties={this.props.properties} 
            handleAddPropertyClick={this.props.handleAddPropertyClick} 
          /> 
        }
      </div>
    )
  }
}

export default IndexComponent
