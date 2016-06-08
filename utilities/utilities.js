export function landCostPerSF(p) {
  const ret = p.landCost/p.landSF
  return isNaN(ret) ? 0 : ret
}

export function percentOfProjectLand(p, u){
  const ret = p.landCost/exports.totalProjectCost(p, u)
  return isNaN(ret) ? 0 : ret
}

export function totalSF(u) {
  let totalSF = 0
  for(let i=0;i<u.length; i++) totalSF += parseInt(u[i].SF)
  const ret = totalSF
  return isNaN(ret) ? 0 : ret
}

export function hardCosts(p, u){
  const ret = p.hardCostsPerSF*exports.totalSF(u)
  return isNaN(ret) ? 0 : ret
}

export function percentOfProjectHardCosts(p, u){
  const ret = exports.hardCosts(p, u)/exports.totalProjectCost(p, u)
  return isNaN(ret) ? 0 : ret
}

export function softCosts(p, u){
  const ret = p.softCostsPerSF*exports.totalSF(u)
  return isNaN(ret) ? 0 : ret
}

export function percentOfProjectSoftCosts(p, u){
  const ret = exports.softCosts(p, u)/exports.totalProjectCost(p, u)
  return isNaN(ret) ? 0 : ret
}

export function hardSoftCosts(p, u){
  const ret = exports.softCosts(p, u)+exports.hardCosts(p, u)
  return isNaN(ret) ? 0 : ret
}

export function totalProjectCost(p, u){
  const ret = parseFloat(p.landCost)+parseFloat(exports.hardCosts(p, u))+parseFloat(exports.softCosts(p, u))
  return isNaN(ret) ? 0 : ret
}

export function rentMonthly(u){
  let totalRent = 0
  for(let i=0;i<u.length; i++) totalRent += Number(u[i].SF*u[i].rent)
  const ret = totalRent
  return isNaN(ret) ? 0 : ret
}

export function rentAnnual(u){
  const ret = exports.rentMonthly(u)*12
  return isNaN(ret) ? 0 : ret
}

export function grossPotentialIncome(u){
  const ret = exports.rentAnnual(u)
  return isNaN(ret) ? 0 : ret
}

export function vacancyExpense(p, u){
  const ret = -exports.grossPotentialIncome(u)*p.vacancyRate
  return isNaN(ret) ? 0 : ret
}

export function grossOperatingIncome(p, u){
  const ret = exports.grossPotentialIncome(u)+exports.vacancyExpense(p, u)
  return isNaN(ret) ? 0 : ret
}

export function operatingExpense(p, u){
  const ret = -(exports.grossOperatingIncome(p, u))*p.operatingExpenseRate
  return isNaN(ret) ? 0 : ret
}

export function netOperatingIncome(p, u){
  const ret = exports.grossOperatingIncome(p, u)+exports.operatingExpense(p, u)
  return isNaN(ret) ? 0 : ret
}

export function cashReturn(p, u){
  const ret = exports.netOperatingIncome(p, u)/exports.totalProjectCost(p, u)
  return isNaN(ret) ? 0 : ret
}

export function downPayment(p, u){
  const ret = exports.totalProjectCost(p, u)*p.downPaymentRate
  return isNaN(ret) ? 0 : ret
}

export function debt(p, u){
  const ret = exports.totalProjectCost(p, u)-exports.downPayment(p, u)
  return isNaN(ret) ? 0 : ret
}

export function debtPaymentMonthly(p, u){
  let intr = p.loanRateAnnual/12
  let princ = exports.debt(p, u)
  let term = p.loanTermYears*12

  const ret = -princ * intr / (1 - (Math.pow(1/(1 + intr), term)))
  return isNaN(ret) ? 0 : ret
}

export function debtPaymentAnnual(p, u){
  const ret = exports.debtPaymentMonthly(p, u)*12
  return isNaN(ret) ? 0 : ret
}

export function cashFlowMonthly(p, u){
  const ret = exports.cashFlowAnnual(p, u)/12
  return isNaN(ret) ? 0 : ret
}

export function cashFlowAnnual(p, u){
  const ret = exports.netOperatingIncome(p, u)+exports.debtPaymentAnnual(p, u)
  return isNaN(ret) ? 0 : ret
}

export function loanConstant(p, u){
  const ret = exports.debtPaymentAnnual(p, u)/exports.debt(p, u)
  return isNaN(ret) ? 0 : ret
}

export function debtServiceCoverageRatio(p, u){
  const ret = exports.netOperatingIncome(p, u)/exports.debtPaymentAnnual(p, u)
  return isNaN(ret) ? 0 : ret
}

export function preTaxReturnOnEquity(p, u){
  const ret = exports.cashFlowAnnual(p, u)/exports.downPayment(p, u)
  return isNaN(ret) ? 0 : ret
}
