import React from 'react'
import {Link} from 'react-router'
import * as utils from '../utilities/utilities'

const PropertyComponent = (props)=>{
  return (
    <div>
      <h1>React Pro Forma</h1>
      <ul className="property-nav-links">
        <li><Link to={`/`}>Home</Link></li>
        {props.propertyLinks.map((pl)=>{
          return (
            <li key={pl.property_id} className={pl.property_id == props.property.property_id ? 'strong' : ''}><Link to={`/property/${pl.property_id}`}>{pl.name}</Link></li>
          )
        })}
      </ul>

      <div>
        <h2>Project cost</h2>
        <table className="five-columns">
          <thead>
            <tr>
              <th></th>
              <th>Cost</th>
              <th>Square feet</th>
              <th>Cost/SF</th>
              <th>Pct. of total cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Land cost</td>
              <td>
                <input id="landCost" 
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'landCost', e.target.value)
                  }} 
                  value={props.property.landCost} />
              </td>
              <td>
                <input id="landSF" 
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'landSF', e.target.value)
                  }} 
                  value={props.property.landSF} />
              </td>
              <td>{utils.landCostPerSF(props.property).toFixed(2)}</td>
              <td>{(utils.percentOfProjectLand(props.property, props.units)*100).toFixed(1)}%</td>
            </tr>

            <tr>
              <td>Hard costs</td>
              <td>{utils.hardCosts(props.property, props.units)}</td>
              <td>{utils.totalSF(props.units)}</td>
              <td>
                <input id="hardCostsPerSF" 
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'hardCostsPerSF', e.target.value)
                  }} 
                  value={props.property.hardCostsPerSF} />
              </td>
              <td>{(utils.percentOfProjectHardCosts(props.property, props.units)*100).toFixed(1)}%</td>
            </tr>

            <tr>
              <td>Soft costs</td>
              <td>{utils.softCosts(props.property, props.units)}</td>
              <td>{utils.totalSF(props.units)}</td>
              <td>
                <input id="softCostsPerSF" 
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'softCostsPerSF', e.target.value)
                  }} 
                  value={props.property.softCostsPerSF} />
              </td>
              <td>{(utils.percentOfProjectSoftCosts(props.property, props.units)*100).toFixed(1)}%</td>
            </tr>

            <tr className="strong">
              <td>Total project cost</td>
              <td>{utils.totalProjectCost(props.property, props.units)}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Operating income</h2>
        <table className="units-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Square feet</th>
              <th>Rent per SF</th>
              <th>Monthly rent</th>
              <th>Yearly rent</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.units.map((unit)=>{
              return (
                <tr key={unit.unit_id} className="unit">
                  <td>
                    <input onChange={(e)=>{
                      props.handleUpdateUnit(unit.unit_id, 'name', e.target.value)
                    }} value={unit.name}/> 
                  </td>
                  <td>
                    <input onChange={(e)=>{
                      props.handleUpdateUnit(unit.unit_id, 'SF', e.target.value)
                    }} value={unit.SF}/> 
                  </td>
                  <td>
                    <input onChange={(e)=>{
                      props.handleUpdateUnit(unit.unit_id, 'rent', e.target.value)
                    }} value={unit.rent}/>
                  </td>
                  <td>{unit.rent*unit.SF}</td>
                  <td>{unit.rent*unit.SF*12}</td>
                  <td>
                    <a href="#" className="deleteUnitButton red-link" onClick={(e)=>{
                      e.preventDefault()
                      props.handleDeleteUnit(props.property.property_id, unit.unit_id)
                    }}>Delete</a>
                  </td>
                </tr>
              )
            })}
            <tr className={!props.units.length ? 'hidden' : 'strong'}>
              <td>Total</td>
              <td>{utils.totalSF(props.units)}</td>
              <td></td>
              <td>{utils.rentMonthly(props.units)}</td>
              <td>{utils.rentAnnual(props.units)}</td>
            </tr>
          </tbody>
        </table>

        <p className={props.units.length ? 'hidden' : ''}>No units added</p>

        <a href="#" id="showAddUnitFormButton" onClick={(e)=>{
          e.preventDefault()
          props.handleShowAddUnitForm()
        }}>Add a unit</a>


        <div id="addUnitFormContainer" className={props.ui.showAddUnitForm ? '' : 'hidden'}>
          <label>Name of unit</label>
          <input id="addUnitFormName" value={props.forms.name} name="name" onChange={(e)=>{
            props.handleUpdateAddUnitForm('name', e.target.value)
          }} />
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
            props.handleAddUnit(props.property.property_id, props.forms.name, props.forms.rent, props.forms.SF)
          }}>Add</a> | 
          <a id="closeAddUnitForm" onClick={(e)=>{
            e.preventDefault()
            props.handleCloseAddUnitForm()
          }}>Cancel</a>
        </div>

        <table className="two-column" id="operating-income-table">
          <tbody>
            <tr>
              <td>Gross potential income (GPI)</td>
              <td>{utils.grossPotentialIncome(props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Vacancy rate</td>
              <td>
                <input id="vacancyRate" size="6"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'vacancyRate', e.target.value)
                  }} 
                  value={props.property.vacancyRate} />
              </td>
            </tr>
            <tr>
              <td>Vacancy expense</td>
              <td className="negative">{utils.vacancyExpense(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Gross operating income (GOI)</td>
              <td>{utils.grossOperatingIncome(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
            </tr>
            <tr>
              <td>Operating expense rate</td>
              <td>
                <input id="operatingExpenseRate" size="6"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'operatingExpenseRate', e.target.value)
                  }} 
                  value={props.property.operatingExpenseRate} />
              </td>
            </tr>
            <tr>
              <td>Operating expense</td>
              <td className="negative">{utils.operatingExpense(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Net operating income (NOI)</td>
              <td>{utils.netOperatingIncome(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
            </tr>
            <tr>
              <td>Cash return on project</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Cash flow & debt service</h2>
        <table id="cashflow-table" className="two-column">
          <tbody>
            <tr>
              <td>Project cost</td>
              <td>{utils.totalProjectCost(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Down payment rate</td>
              <td>
                <input id="downPaymentRate" size="6"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'downPaymentRate', e.target.value)
                  }} 
                  value={props.property.downPaymentRate} />
              </td>
            </tr>
            <tr>
              <td>Down payment</td>
              <td>{utils.downPayment(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Debt</td>
              <td>{utils.debt(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
            </tr>
            <tr>
              <td>Monthly payment</td>
              <td className="negative">{utils.debtPaymentMonthly(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Annual payment</td>
              <td className="negative">{utils.debtPaymentAnnual(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
            </tr>
            <tr>
              <td>Annual NOI</td>
              <td>{utils.netOperatingIncome(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
            </tr>
            <tr>
              <td>Cash flow monthly</td>
              <td className={utils.cashFlowMonthly(props.property, props.units) < 0 ? 'negative' : ''}>{utils.cashFlowMonthly(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Cash flow annual</td>
              <td className={utils.cashFlowAnnual(props.property, props.units) < 0 ? 'negative' : ''}>{utils.cashFlowAnnual(props.property, props.units).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <table id="debt-table" className="two-column">
          <tbody>
            <tr>
              <td>Loan term (yrs.)</td>
              <td>
                <input id="loanTermYears" size="6"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'loanTermYears', e.target.value)
                  }} 
                  value={props.property.loanTermYears} />
              </td>
            </tr>
            <tr>
              <td>Loan rate</td>
              <td>
                <input id="loanRateAnnual" size="6"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'loanRateAnnual', e.target.value)
                  }} 
                  value={props.property.loanRateAnnual} />
              </td>
            </tr>
            <tr>
              <td>Loan constant</td>
              <td>{(utils.loanConstant(props.property, props.units)*100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
            </tr>
            <tr>
              <td>Debt service coverage ratio</td>
              <td>{utils.debtServiceCoverageRatio(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
            </tr>
            <tr>
              <td>Pretax return on equity</td>
              <td>{(utils.preTaxReturnOnEquity(props.property, props.units)*100).toFixed(2)}%</td>
            </tr>
          </tbody>
        </table>
        <div className="clearFix"></div>
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
