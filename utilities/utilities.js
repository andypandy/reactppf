export function landCostPerSF(p) {
  return (p.landCost/p.landSF).toFixed(2)
}

export function percentOfProjectLand(p){
  p.landCost/exports.totalProjectCost(p)
}

export function totalSF(u) {
  let totalSF = 0
  for(let i=0;i<u.length; i++) totalSF += u[i].SF
  return totalSF;
}

export function hardCosts(p, u){
  p.hardCostsPerSF*exports.totalSF(u)
}

export function percentOfProjectHardCosts(p){
  exports.hardCosts(p)/exports.totalProjectCost(p)
}

export function softCosts(p, u){
  p.softCostsPerSF*exports.totalSF(u)
}

export function percentOfProjectSoftCosts(p){
  exports.softCosts(p)/exports.totalProjectCost(p)
}

export function hardSoftCosts(p){
  exports.softCosts(p)+exports.hardCosts(p)
}

export function totalProjectCost(p){
  parseFloat(p.landCost)+parseFloat(exports.hardCosts(p))+parseFloat(exports.softCosts(p))
}

export function rentMonthly(u){
  let totalRent = 0
  for(let i=0;i<u.length; i++) totalRent += u[i].sf*u[i].rent
  return totalRent;
}

export function rentAnnual(u){
  exports.rentMonthly(u)*12
}

export function grossPotentialIncome(u){
  exports.rentAnnual(u)
}

export function vacancyExpense(p, u){
  -exports.grossPotentialIncome(u)*p.vacancyRate
}

export function grossOperatingIncome(p, u){
  exports.grossPotentialIncome(u)+exports.vacancyExpense(p, u)
}

export function operatingExpense(p, u){
  return -(exports.grossOperatingIncome(p, u))*p.operatingExpenseRate
}

export function netOperatingIncome(p, u){
  exports.grossOperatingIncome(p, u)+exports.operatingExpense(p, u)
}

export function cashReturn(p, u){
  exports.netOperatingIncome(p, u)/exports.totalProjectCost(p)
}

export function downPayment(p){
  exports.totalProjectCost(p)*p.downPaymentRate
}

export function debt(p){
  exports.totalProjectCost(p)-exports.downPayment(p)
}

export function debtPaymentMonthly(p){
  let intr = p.loanRateAnnual/1200
  let princ = exports.debt(p)
  let term = p.loanTermYears*12

  return princ * intr / (1 - (Math.pow(1/(1 + intr), term)))
}

export function debtPaymentAnnual(p){
  exports.debtPaymentMonthly(p)*12
}

export function cashFlowMonthly(p, u){
  exports.cashFlowAnnual(p, u)/12
}

export function cashFlowAnnual(p, u){
  exports.netOperatingIncome(p, u)-exports.debtPaymentAnnual(p)
}

export function loanConstant(p){
  exports.debtPaymentAnnual(p)/exports.debt(p)
}

export function debtServiceCoverageRatio(p, u){
  exports.netOperatingIncome(p, u)/exports.debtPaymentAnnual(p)
}

export function preTaxReturnOnEquity(p, u){
  exports.cashFlowAnnual(p, u)/exports.downPayment(p)
}
