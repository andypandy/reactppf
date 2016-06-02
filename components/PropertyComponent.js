import React from 'react'
import * as utils from '../utilities/utilities'

const PropertyComponent = (props)=>{
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
                  props.handleUpdateUnit(unit.unit_id, 'rent', e.target.value)
                }} value={unit.rent}/>
              </li>
            )
          })}
        </ul>

        <a id="showAddUnitFormButton" onClick={(e)=>{
          e.preventDefault()
          props.handleShowAddUnitForm()
        }}>Add a unit</a>
      </div>

      <div id="addUnitForm" className={props.ui.showAddUnitForm ? '' : 'hidden'}>
        <form onSubmit={(e)=>{
          e.preventDefault()
          console.log(e.target)
          props.handleAddUnitForm()
        }}>
          Rent
          SF 
          <label>Square feet of unit</label>
          <input name="sf" />
          <a onClick={(e)=>{
            e.preventDefault()
            props.handleCloseAddUnitForm()
          }}>Cancel</a>
          <input type="submit" value="Add unit" />
        </form>
      </div>

      <div>Delete property button</div>

    </div>
  )
}

export default PropertyComponent
