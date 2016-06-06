import React from 'react'
import * as utils from '../utilities/utilities'

const PropertyComponent = (props)=>{
  //console.log('props', props)

  return (
    <div>
      <div>list of other properties</div>

      <div>
        <label>Land cost</label>
        <input id="landCost" onChange={(e)=>{
          props.handleUpdateProperty(props.property.property_id, 'landCost', e.target.value)
        }} />
      </div>

      <div>
        <p className={props.units.length ? 'hidden' : ''}>No units added</p>
        <ul>
          {props.units.map((unit)=>{
            return (
              <li className="unit" key={unit.unit_id}>
                Rent: <input onChange={(e)=>{
                  props.handleUpdateUnit(unit.unit_id, 'rent', e.target.value)
                }} value={unit.rent}/>
                SF: <input onChange={(e)=>{
                  props.handleUpdateUnit(unit.unit_id, 'SF', e.target.value)
                }} value={unit.SF}/> 
                <a className="deleteUnitButton" onClick={(e)=>{
                  e.preventDefault()
                  props.handleDeleteUnit(props.property.property_id, unit.unit_id)
                }}>Delete</a>
              </li>
            )
          })}
        </ul>

        <a id="showAddUnitFormButton" onClick={(e)=>{
          e.preventDefault()
          props.handleShowAddUnitForm()
        }}>Add a unit</a>
      </div>

      <div id="addUnitFormContainer" className={props.ui.showAddUnitForm ? '' : 'hidden'}>
        <label>Unit's monthly rent</label>
        <input id="addUnitFormRent" value={props.forms.rent} name="rent" onChange={(e)=>{
          props.handleUpdateAddUnitForm('rent', e.target.value)
        }} />
        <label>Square feet of unit</label>
        <input id="addUnitFormSF" value={props.forms.SF} name="SF" onChange={(e)=>{
          props.handleUpdateAddUnitForm('SF', e.target.value)
        }} />
        <a id="addUnitButton" onClick={(e)=>{
          e.preventDefault()
          console.log('forms', props.forms)
          props.handleAddUnit(props.property.property_id, props.forms.rent, props.forms.SF)
        }}>Add</a> | 
        <a id="closeAddUnitForm" onClick={(e)=>{
          e.preventDefault()
          props.handleCloseAddUnitForm()
        }}>Cancel</a>
      </div>

      <div>
        <a onClick={(e)=>{
          e.preventDefault()
          props.handleDeleteProperty(props.property.property_id, props.property.units)
        }}>Delete property button</a>
      </div>

    </div>
  )
}

export default PropertyComponent
