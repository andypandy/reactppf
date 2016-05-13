import React from 'react'
import * as utils from '../utilities/utilities'


class Property extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <p>Land cost: {utils.landCostPerSF(this.props.property)}</p>
      </div>
    )
  }
}

// const Property = ({property, units, handlePropertyInputChange, handleAddUnitFormSubmit}) => (
//   <div>
//     <div>
//       <label>Name: {property.name}</label>
//       <input
//         value={property.name}
//         onChange={(e)=>{
//           handlePropertyInputChange(property.property_id, 'name', e.target.value)
//         }}
//       />
//     </div>

//     <div>
//       <label>Name: {property.address}</label>
//       <input
//         value={property.address}
//         onChange={(e)=>{
//           handlePropertyInputChange(property.property_id, 'address', e.target.value)
//         }}
//       />
//     </div>

//     <label>Land cost</label>
//     <input
//       value={property.landCost}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'landCost', e.target.value)
//       }}
//     /><br />

//     <label>Land sq. ft.</label>
//     <input
//       value={property.landSF}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'landSF', e.target.value)
//       }}
//     /><br />

//     <label>Hard costs per sq. ft.</label>
//     <input
//       value={property.hardCostsPerSF}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'hardCostsPerSF', e.target.value)
//       }}
//     /><br />

//     <label>Soft costs per sq. ft.</label>
//     <input
//       value={property.softCostsPerSF}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'softCostsPerSF', e.target.value)
//       }}
//     /><br />

//     <label>Square feet</label>
//     <input
//       value={property.sf}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'sf', e.target.value)
//       }}
//     /><br />

//     <label>Rent per sq. ft. (monthly)</label>
//     <input
//       value={property.rentPerSFMonthly}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'rentPerSFMonthly', e.target.value)
//       }}
//     /><br />

//     <label>Vacancy rate</label>
//     <input
//       value={property.vacancyRate}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'vacancyRate', e.target.value)
//       }}
//     /><br />

//     <label>Operating expense rate</label>
//     <input
//       value={property.operatingExpenseRate}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'operatingExpenseRate', e.target.value)
//       }}
//     /><br />

//     <label>Down payment percentage (eg. 20%)</label>
//     <input
//       value={property.downPaymentRate}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'downPaymentRate', e.target.value)
//       }}
//     /><br />

//     <label>Loan term (years)</label>
//     <input
//       value={property.loanTermYears}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'loanTermYears', e.target.value)
//       }}
//     /><br />

//     <label>Loan rate (annual, eg. 4.5%)</label>
//     <input
//       value={property.loanRateAnnual}
//       onChange={(e)=>{
//         handlePropertyInputChange(property.property_id, 'loanRateAnnual', e.target.value)
//       }}
//     /><br />

//     <h2>Cost/SF: {property.landCost/property.landSF}</h2>
//     <div>
//       Land cost per sq. ft. {landCostPerSF(property)}<br />
//       Land cost as percent of project {percentOfProjectLand(property)}<br />
//       Hard costs {hardCosts(property)}<br />
//       Hard costs as percent of project {percentOfProjectHardCosts(property)}<br />
//       Soft costs {softCosts(property)}<br />
//       Soft costs as percent of project {percentOfProjectSoftCosts(property)}<br />
//       Hard costs + Soft costs {hardSoftCosts(property)}<br />
//       Total project cost {totalProjectCost(property)}<br />
//       Monthly rent {rentMonthly(property, units)}<br />
//       Annual rent {rentAnnual(property, units)}<br />
//       GPI {grossPotentialIncome(property, units)}<br />
//       Vacancy expense {vacancyExpense(property, units)}<br />
//       Gross operating income {grossOperatingIncome(property, units)}<br />
//       Operating expense {operatingExpense(property, units)}<br />
//       NOI {netOperatingIncome(property, units)}<br />
//       Cash return {cashReturn(property, units)}<br />
//       Down payment {downPayment(property)}<br />
//       Debt {debt(property)}<br />
//       Debt payment (monthly) {debtPaymentMonthly(property).toFixed(2)}<br />
//       Debt payment (annual) {debtPaymentAnnual(property)}<br />
//       Cash flow (monthly) {cashFlowMonthly(property, units)}<br />
//       Cash flow (annual) {cashFlowAnnual(property, units).toFixed(2)}<br />
//       Loan constant {loanConstant(property)}<br />
//       Debt service coverage ratio {debtServiceCoverageRatio(property, units)}<br />
//       Pretax return on equity {preTaxReturnOnEquity(property, units)}
//     </div>
//   </div>
// )

// Property.propTypes = { landCost: React.PropTypes.number }

export default Property

/**Hard cost/SF           hardCostsPerSF
*Soft costs/SF            softCostsPerSF
*Vacancy rate %           vacancyRate
*Operating expenses %     operatingExpenseRate
*Down payment %           downPaymentRate
*Loan term                loanTermYears
*Loan rate                loanRateAnnual

*Land cost                landCost
*Land SF                  landSF
Land cost per sf          landCostPerSF
Land % of project         percentOfProjectLand
Hard costs                hardCosts
*Hard cost/SF             hardCostsPerSF
Hard costs % of project   percentOfProjectHardCosts
Soft costs                softCosts
*Soft costs/SF            softCostsPerSF
Soft % of project         percentOfProjectSoftCosts
Hard+soft costs           hardSoftCosts
Total project costs       totalProjectCost

*Rent rate/SF             rentPerSF
*Square feet              SF
Monthly rent              rentMonthly
Annual rent               rentAnnual
Gross potential income    grossPotentialIncome
*Vacancy rate %           vacancyRate
Vacancy expense           vacancyExpense
Gross operating income    grossOperatingIncome
*Operating expenses %     operatingExpenseRate
Operating expenses        operatingExpense
Net operating income      netOperatingIncome
Cash return on project    cashReturn

*Down payment %           downPaymentRate
Down payment
Debt                      debt
Monthly payment           debtPaymentMonthly
Annual payment            debtPaymentAnnual
Cash flow monthly         cashFlowMonthly
cash flow annual          cashFlowAnnual
*Loan term                loanTermMonths
*Loan rate                loanRatePerMonth
Loan constant             loanConstant
Debt svc coverage ratio   debtServiceCoverageRatio
Pre tax return on equity  preTaxReturnOnEquity


landCostPerSF
percentOfProjectLand
hardCosts
percentOfProjectHardCosts
softCosts
percentOfProjectSoftCosts
hardSoftCosts
totalProjectCost
rentMonthly
rentAnnual
grossPotentialIncome
vacancyExpense
grossOperatingIncome
operatingExpense
netOperatingIncome
cashReturn
downPayment
debt
debtPaymentMonthly
debtPaymentAnnual
cashFlowMonthly
cashFlowAnnual
loanConstant
debtServiceCoverageRatio
preTaxReturnOnEquity




hardCostsPerSF
softCostsPerSF
vacancyRate
operatingExpenseRate
downPaymentRate
loanTermYears
loanRateAnnual

*/
