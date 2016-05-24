import React from 'react'
import * as utils from '../utilities/utilities'

const PropertyComponent = (
  property, 
  units, 
  handleUpdateProperty, 
  handleDeleteProperty,
  handleShowAddUnitForm,
  handleCloseAddUnitForm,
  handleAddUnit,
  handleDeleteUnit,
  handleUpdateUnit)=>{

  return (
    <div>
      <div>list of other properties</div>

      <div>
        <label>Land cost</label>
        <input onChange={(e)=>{
          handleUpdateProperty(property.property_id, 'landCost', e.target.value)
        }} />
      </div>

      <div>
        <p className{units.length ? 'hidden' : ''}>No units added</p>
        <ul>
          {units.map((unit)=>{
            return (
              <li key={unit.unit_id}>
                Rent: <input onChange={(e)=>{
                  handleUpdateUnit(unit.unit_id, 'rent', e.target.value)
                }} value={unit.rent}/>
                SF: <input onChange={(e)=>{
                  handleUpdateUnit(unit.unit_id, 'rent', e.target.value)
                }} value={unit.rent}/>
              </li>
            )
          })}
        </ul>

        <a onClick={(e)=>{
          e.preventDefault()
          handleShowAddUnitForm()
        }}>Add a unit</a>
      </div>

      <div id="add_unit_form" className={uiState.showAddUnitForm ? '' : 'hidden'}>
        Rent
        SF
        <a onClick={(e)=>{
          e.preventDefault()
          handleCloseAddUnitForm()
        }}>Cancel</a>
      </div>

      <div>Delete property button</div>

    </div>
  )
}

export default PropertyComponent
