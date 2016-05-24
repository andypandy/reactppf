import React from 'react'
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
        
        { !this.props.properties.length ? 
          <WelcomeComponent 
            handleAddPropertyClick={this.props.handleAddPropertyClick} 
          /> : 
          <IndexListComponent 
            properties={this.props.properties} 
            handleAddPropertyClick={this.props.handleAddPropertyClick} 
          /> 
        }
        
        <a onClick={(e)=>{
          e.preventDefault()
          this.props.handleAddPropertyClick()
        }}>Add property</a>

        <input onChange={this.handleChange} />

      </div>
    )
  }
}

export default IndexComponent
