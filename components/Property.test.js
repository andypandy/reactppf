import expect from 'expect'
import Property from './Property'

describe('me', ()=>{
  it('should be sane', ()=> {
    const actual = 1
    const expected = 1
    expect(actual).toEqual(expected)
  })
})

describe('property calculations', ()=>{
  it('should calculate land cost/SF correctly', ()=>{
    const expected = 20
    const property = {
      landCost: 200,
      landSf: 10
    }
    const actual = Property.landCostPerSF(property)
    expect(actual).toEqual(expected)
  })
})
