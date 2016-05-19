import expect from 'expect'
import * as utils from './utilities'

describe('utilities/property ratio helpers', ()=>{
  const property = {
    landCost: 100000,
    landSF: 4523,
    SF: 1200,
    rentPerSFMonthly: 1.5,
    hardCostsPerSF: 100,
    softCostsPerSF: 25,
    vacancyRate: .05,
    operatingExpenseRate: .3,
    downPaymentRate: .2,
    loanTermYears: 30,
    loanRateAnnual:.05,
  }

  const units = [{
    rentPerSF: 1.1,
    SF: 800
  }, {
    rentPerSF: 1.75,
    SF: 1200
  }]


  it('should calculate land cost per SF', ()=>{
    let expected = 22.109219544550076
    let actual = utils.landCostPerSF(property)
    expect(expected).toEqual(actual)
  })

  it('should calulate percent of project cost that is land', ()=>{
    let expected = 0.2857142857142857
    let actual = utils.percentOfProjectLand(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate total SF', ()=>{
    let expected = 2000
    let actual = utils.totalSF(units)
    expect(expected).toEqual(actual)
  })

  it('should calculate hard costs', ()=>{
    let expected = 200000
    let actual = utils.hardCosts(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate percent of project that is hard costs', ()=>{
    let expected = 0.5714285714285714
    let actual = utils.percentOfProjectHardCosts(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate soft costs', ()=>{
    let expected = 50000
    let actual = utils.softCosts(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate percent of project that is soft costs', ()=>{
    let expected = 0.14285714285714285
    let actual = utils.percentOfProjectSoftCosts(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate hard and soft costs', ()=>{
    let expected = 250000
    let actual = utils.hardSoftCosts(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate total project cost', ()=>{
    let expected = 350000
    let actual = utils.totalProjectCost(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate monthly rent', ()=>{
    let expected = 2980
    let actual = utils.rentMonthly(units)
    expect(expected).toEqual(actual)
  })

  it('should calculate annual rent', ()=>{
    let expected = 35760
    let actual = utils.rentAnnual(units)
    expect(expected).toEqual(actual)
  })

  it('should calculate gross potential income', ()=>{
    let expected = 35760
    let actual = utils.grossPotentialIncome(units)
    expect(expected).toEqual(actual)
  })

  it('should calculate vacancy expense', ()=>{
    let expected = -1788
    let actual = utils.vacancyExpense(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate gross operating income', ()=>{
    let expected = 33972
    let actual = utils.grossOperatingIncome(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate operating expense', ()=>{
    let expected = -10191.6
    let actual = utils.operatingExpense(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate net operating income', ()=>{
    let expected = 23780.4
    let actual = utils.netOperatingIncome(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate cash return', ()=>{
    let expected = 0.067944
    let actual = utils.cashReturn(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate down payment', ()=>{
    let expected = 70000
    let actual = utils.downPayment(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate debt', ()=>{
    let expected = 280000
    let actual = utils.debt(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate monthly debt payment', ()=>{
    let expected = 1503.1005444339933
    let actual = utils.debtPaymentMonthly(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate annual debt payment', ()=>{
    let expected = 18037.20653320792
    let actual = utils.debtPaymentAnnual(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate monthly cash flow', ()=>{
    let expected = 478.59945556600695
    let actual = utils.cashFlowMonthly(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate annual cash flow', ()=>{
    let expected = 5743.193466792083
    let actual = utils.cashFlowAnnual(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate loan constant', ()=>{
    let expected = 0.06441859476145685
    let actual = utils.loanConstant(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate debt service coverage ratio', ()=>{
    let expected = 1.318408144643596
    let actual = utils.debtServiceCoverageRatio(property, units)
    expect(expected).toEqual(actual)
  })

  it('should calculate pre tax return on equity', ()=>{
    let expected = 0.08204562095417262
    let actual = utils.preTaxReturnOnEquity(property, units)
    expect(expected).toEqual(actual)
  })
})
