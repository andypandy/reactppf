import React from 'react'
import {Link} from 'react-router'
import * as utils from '../utilities/utilities'

const PropertyComponent = (props)=>{
  return (
    <div>
      <h1>React Pro Forma</h1>
      <p className="h1">Dead simple real estate pro formas</p>
      <ul className="property-nav-links">
        <li><Link to={`/`}>Home</Link></li>
        {props.propertyLinks.map((pl)=>{
          return (
            <li key={pl.property_id} className={pl.property_id == props.property.property_id ? 'strong' : ''}><Link to={`/property/${pl.property_id}`}>{pl.name}</Link></li>
          )
        })}
      </ul>

      <div>
        <h2 className="h2-top">Project name</h2>
        <input id="propertyName"  autoFocus
          onChange={(e)=>{
            props.handleUpdateProperty(props.property.property_id, 'name', e.target.value)
          }} 
          value={props.property.name} />
      </div>

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

        <p className={props.units.length ? 'hidden no-units-message' : 'no-units-message'}>Your property has no units.</p>

        <table className={!props.units.length ? 'hidden units-table' : 'units-table'}>
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
                  <td>{(unit.rent*unit.SF).toFixed(0)}</td>
                  <td>{(unit.rent*unit.SF*12).toFixed(0)}</td>
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
              <td>{utils.rentMonthly(props.units).toFixed(0)}</td>
              <td>{utils.rentAnnual(props.units).toFixed(0)}</td>
            </tr>
          </tbody>
        </table>

        <a href="#" id="show-add-unit-form-link" onClick={(e)=>{
          e.preventDefault()
          props.handleShowAddUnitForm()
        }}>{!props.units.length ? 'Add a unit' : 'Add another unit'}</a>

        <div id="add-unit-form-container" className={props.ui.showAddUnitForm ? '' : 'hidden'}>
          <div>
            <label>Name of unit</label>
            <input id="addUnitFormName" className="wide" value={props.forms.name} name="name" onChange={(e)=>{
              props.handleUpdateAddUnitForm('name', e.target.value)
            }} />
          </div>
          <div>
            <label>Square feet of unit</label>
            <input id="addUnitFormSF" value={props.forms.SF} name="SF" onChange={(e)=>{
              props.handleUpdateAddUnitForm('SF', e.target.value)
            }} />
          </div>
          <div>
            <label>Rent <strong>per square foot</strong></label>
            <input id="addUnitFormRent" value={props.forms.rent} name="rent" onChange={(e)=>{
              props.handleUpdateAddUnitForm('rent', e.target.value)
            }} />
          </div>
          <div>
            <a id="addUnitButton" href="#" onClick={(e)=>{
              e.preventDefault()
              props.handleAddUnit(props.property.property_id, props.forms.name, props.forms.rent, props.forms.SF)
            }}>Add unit</a>&nbsp;
            <a id="closeAddUnitForm" className="red-link" href="#" onClick={(e)=>{
              e.preventDefault()
              props.handleCloseAddUnitForm()
            }}>Cancel</a>
          </div>
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
                <input id="vacancyRate" size="4"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'vacancyRate', e.target.value)
                  }} 
                  value={props.property.vacancyRate} /> <span className="pbi">%</span>
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
                <input id="operatingExpenseRate" size="4"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'operatingExpenseRate', e.target.value)
                  }} 
                  value={props.property.operatingExpenseRate} /> <span className="pbi">%</span>
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
              <td>{(utils.cashReturn(props.property, props.units)*100).toFixed(2)}%</td>
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
                <input id="downPaymentRate" size="4"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'downPaymentRate', e.target.value)
                  }} 
                  value={props.property.downPaymentRate} /> <span className="pbi">%</span>
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
                <input id="loanRateAnnual" size="4"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'loanRateAnnual', e.target.value)
                  }} 
                  value={props.property.loanRateAnnual} /> <span className="pbi">%</span>
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
        <h2>Financial ratios</h2>
        <table id="financial-info-table" className="two-column">
          <tbody>
            <tr>
              <td>Cap rate</td>
              <td>
                <input id="capRate" size="4"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'capRate', e.target.value)
                  }} 
                  value={props.property.capRate} /> <span className="pbi">%</span>
              </td>
            </tr>
            <tr>
              <td>Borrower's net worth</td>
              <td>
                <input id="borrowers-net-worth" size="10"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'borrowersNetWorth', e.target.value)
                  }} 
                  value={props.property.borrowersNetWorth} />
              </td>
            </tr>
            <tr>
              <td>Borrower's income</td>
              <td>
                <input id="borrowers-income"  size="10"
                  onChange={(e)=>{
                    props.handleUpdateProperty(props.property.property_id, 'borrowersIncome', e.target.value)
                  }} 
                  value={props.property.borrowersIncome} />
              </td>
            </tr>
            <tr>
              <td>Down payment</td>
              <td>{utils.downPayment(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Loan amount</td>
              <td>{utils.debt(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total project cost</td>
              <td>{utils.totalProjectCost(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>After construction value</td>
              <td>{(utils.netOperatingIncome(props.property, props.units)/(props.property.capRate/100)).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Profit (from sale)</td>
              <td>{(utils.profit(props.property, props.units)).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Gross potential income (GPI)</td>
              <td>{utils.grossPotentialIncome(props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Net operating income (NOI)</td>
              <td>{utils.netOperatingIncome(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Annual debt service</td>
              <td className="negative">{utils.debtPaymentAnnual(props.property, props.units).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Debt service coverage ratio</td>
              <td>{utils.debtServiceCoverageRatio(props.property, props.units).toFixed(2)}</td>
            </tr>
  
          </tbody>
        </table>

        <table id="financial-ratios-table">
          <thead>
            <tr>
              <th>Ratio</th>
              <th>Value</th>
              <th>Guideline</th>
              <th>Formula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loan to cost ratio</td>
              <td className={utils.loanToCostRatio(props.property, props.units) <= .8 ? 'good' : 'bad'}>
                {(utils.loanToCostRatio(props.property, props.units)*100).toFixed(2)}%
              </td>
              <td>&lt;80% ‡</td>
              <td>loan amount / total cost</td>
            </tr>
            <tr>
              <td>Loan to value ratio *</td>
              <td className={utils.loanToValueRatio(props.property, props.units) <= .7 ? 'good' : 'bad'}>
                {(utils.loanToValueRatio(props.property, props.units)*100).toFixed(2)}%
              </td>
              <td>&lt;70% ‡</td>
              <td>loan amount / after construction value</td>
            </tr>
            <tr>
              <td>Debt service coverage ratio</td>
              <td className={utils.debtServiceCoverageRatio(props.property, props.units) > 1.25 ? 'good' : 'bad'}>
                {utils.debtServiceCoverageRatio(props.property, props.units).toFixed(2)}
              </td>
              <td>&gt;1.25</td>
              <td>NOI / debt service</td>
            </tr>
            <tr>
              <td>Profit ratio *</td>
              <td className={utils.profitRatio(props.property, props.units) > .2 ? 'good' : 'bad'}>
                {(utils.profitRatio(props.property, props.units)*100).toFixed(2)}%
              </td>
              <td>&gt;20%</td>
              <td>profit / total cost</td>
            </tr>
            <tr>
              <td>Net worth to loan size ratio †</td>
              <td className={props.property.borrowersNetWorth/utils.debt(props.property, props.units) >= 1 ? 'good' : 'bad'}>
                {(props.property.borrowersNetWorth/utils.debt(props.property, props.units)).toFixed(2)}
              </td>
              <td>&gt;=1</td>
              <td>borrowers' net worth / loan amount</td>
            </tr>
            <tr>
              <td>Debt yield ratio</td>
              <td className={utils.netOperatingIncome(props.property, props.units)/utils.debt(props.property, props.units) > .09 ? 'good' : 'bad'}>
                {(utils.netOperatingIncome(props.property, props.units)/utils.debt(props.property, props.units)*100).toFixed(2)}%
              </td>
              <td>&gt;9%</td>
              <td>NOI / loan amount</td>
            </tr>
            <tr>
              <td>Debt to income ratio</td>
              <td className={-utils.debtPaymentAnnual(props.property, props.units)/props.property.borrowersIncome < .43 ? 'good' : 'bad'}>
                {(-utils.debtPaymentAnnual(props.property, props.units)/props.property.borrowersIncome*100).toFixed(2)}%
              </td>
              <td>&lt;43% ‡</td>
              <td>debt service / borrowers' income</td>
            </tr>
            <tr>
              <td>100 Rule</td>
              <td className={utils.totalProjectCost(props.property, props.units)/(utils.grossPotentialIncome(props.units)/12) <= 100 ? 'good' : 'bad'}>
                {(utils.totalProjectCost(props.property, props.units)/(utils.grossPotentialIncome(props.units)/12)).toFixed(2)}
              </td>
              <td>&lt;=100</td>
              <td>total cost / monthly gross income</td>
            </tr>
            <tr>
              <td>Profit to equity ratio *</td>
              <td className={utils.profitToEquityRatio(props.property, props.units) > 1 ? 'good' : 'bad'}>
                {(utils.profitToEquityRatio(props.property, props.units)*100).toFixed(2)}%
              </td>
              <td>&gt;=100%</td>
              <td>profit / down payment</td>
            </tr>
          </tbody>
        </table>
        <p className="footnotes">* Uses cap rate input above<br />† Commercial loans only<br />‡ Requirement depends on the loan product</p>
      </div>

      <div>
        <a id="delete-property-link" className="red-link" href="#" onClick={(e)=>{
          e.preventDefault()
          if(window.confirm('Do you really want to delete this property?')) {
            props.handleDeleteProperty(props.property.property_id, props.property.units)
          }
        }}>Delete this property</a>
      </div>

    </div>
  )
}

export default PropertyComponent
