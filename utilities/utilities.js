export function landCostPerSF(p) {
  return p.landCost/p.landSF
}

export function percentOfProjectLand(p, u){
  return p.landCost/exports.totalProjectCost(p, u)
}

export function totalSF(u) {
  let totalSF = 0
  for(let i=0;i<u.length; i++) totalSF += parseInt(u[i].SF)
  return totalSF;
}

export function hardCosts(p, u){
  return p.hardCostsPerSF*exports.totalSF(u)
}

export function percentOfProjectHardCosts(p, u){
  return exports.hardCosts(p, u)/exports.totalProjectCost(p, u)
}

export function softCosts(p, u){
  return p.softCostsPerSF*exports.totalSF(u)
}

export function percentOfProjectSoftCosts(p, u){
  return exports.softCosts(p, u)/exports.totalProjectCost(p, u)
}

export function hardSoftCosts(p, u){
  return exports.softCosts(p, u)+exports.hardCosts(p, u)
}

export function totalProjectCost(p, u){
  return parseFloat(p.landCost)+parseFloat(exports.hardCosts(p, u))+parseFloat(exports.softCosts(p, u))
}

export function rentMonthly(u){
  let totalRent = 0
  for(let i=0;i<u.length; i++) totalRent += Number(u[i].SF*u[i].rent)
  return totalRent;
}

export function rentAnnual(u){
  return exports.rentMonthly(u)*12
}

export function grossPotentialIncome(u){
  return exports.rentAnnual(u)
}

export function vacancyExpense(p, u){
  return -exports.grossPotentialIncome(u)*p.vacancyRate
}

export function grossOperatingIncome(p, u){
  return exports.grossPotentialIncome(u)+exports.vacancyExpense(p, u)
}

export function operatingExpense(p, u){
  return -(exports.grossOperatingIncome(p, u))*p.operatingExpenseRate
}

export function netOperatingIncome(p, u){
  return exports.grossOperatingIncome(p, u)+exports.operatingExpense(p, u)
}

export function cashReturn(p, u){
  return exports.netOperatingIncome(p, u)/exports.totalProjectCost(p, u)
}

export function downPayment(p, u){
  return exports.totalProjectCost(p, u)*p.downPaymentRate
}

export function debt(p, u){
  return exports.totalProjectCost(p, u)-exports.downPayment(p, u)
}

export function debtPaymentMonthly(p, u){
  let intr = p.loanRateAnnual/12
  let princ = exports.debt(p, u)
  let term = p.loanTermYears*12

  return -princ * intr / (1 - (Math.pow(1/(1 + intr), term)))
}

export function debtPaymentAnnual(p, u){
  return exports.debtPaymentMonthly(p, u)*12
}

export function cashFlowMonthly(p, u){
  return exports.cashFlowAnnual(p, u)/12
}

export function cashFlowAnnual(p, u){
  return exports.netOperatingIncome(p, u)+exports.debtPaymentAnnual(p, u)
}

export function loanConstant(p, u){
  return exports.debtPaymentAnnual(p, u)/exports.debt(p, u)
}

export function debtServiceCoverageRatio(p, u){
  return exports.netOperatingIncome(p, u)/exports.debtPaymentAnnual(p, u)
}

export function preTaxReturnOnEquity(p, u){
  return exports.cashFlowAnnual(p, u)/exports.downPayment(p, u)
}
