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
    rent: 1000,
    SF: 800
  }, {
    rent: 1750,
    SF: 1200
  }]


  it('should calculate land cost per SF', ()=>{
    let expected = 22.11
    let actual = utils.landCostPerSF(property)
    expect(expected).toEqual(actual)
  })

  xit('should calulate percent of projec cost that is land', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  it('should calculate total SF', ()=>{
    let expected = 2000
    let actual = utils.totalSF(units)
    expect(expected).toEqual(actual)
  })

  it('should calculate hard costs', ()=>{
    let expected = 200000.00
    let actual = utils.hardCosts(property, units)
    expect(expected).toEqual(actual)
  })

  xit('should calculate percent of project that is hard costs', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  it('should calculate soft costs', ()=>{
    let expected = 50000
    let actual = utils.softCosts(property, units)
    expect(expected).toEqual(actual)
  })

  xit('should calculate percent of project that is soft costs', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate hard and soft costs', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate total project cost', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate monthly rent', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate annual rent', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate gross potential income', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate vacancy expense', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate gross operating income', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate operating expense', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate net operating income', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate cash return', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate down payment', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate debt', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate monthly debt payment', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate annual debt payment', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate monthly cash flow', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate annual cash flow', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate loan constant', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate debt service coverage ratio', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })

  xit('should calculate pre tax return on equity', ()=>{
    let expected
    let actual
    expect(expected).toEqual(actual)
  })
})

/*
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
*/
