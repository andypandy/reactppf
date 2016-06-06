const initialState = [{
    property_id: 0,
    name:'Cool initial property',
    landCost: 100000,
    landSF: 4523,
    sf: 1200,
    rentPerSFMonthly: 1.5,
    hardCostsPerSF: 100,
    softCostsPerSF: 25,
    vacancyRate: .05,
    operatingExpenseRate: .3,
    downPaymentRate: .2,
    loanTermYears: 30,
    loanRateAnnual:.05,
    units: [1,2]
  },
  {
    property_id: 1, name: 'Another cool property', landCost: 0, landSF: 0, units: []
  }
]

const properties = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROPERTY':
      return state.concat(action.property)

    case 'UPDATE_PROPERTY':
      return state.map((property) => {
        if(property.property_id == action.property_id) {
          let newPropObj = {}
          newPropObj[action.key] = action.value
          return Object.assign({}, property, newPropObj)
        }
        return property
      })

    case 'DELETE_PROPERTY':
      return state.filter((property)=>{
        return property.property_id != action.property_id
      })

    case 'ADD_UNIT':
      return state.map((property) => {
        if(property.property_id == action.payload.property_id) {
          property.units.push(action.payload.unit_id)
          return property
        }
        return property
      })
      //return property

    case 'DELETE_UNIT':
      return state.map((property)=>{
        if(property.property_id == action.payload.property_id) {
          property.units = property.units.filter((unit_id)=>{
            return unit_id != action.payload.unit_id
          })
          return property
        }
        return property
      })

    default:
      return state;
  }
}


export default properties
