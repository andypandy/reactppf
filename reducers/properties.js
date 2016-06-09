const initialState = [{
    property_id: 0,
    name:'Example property',
    landCost: 100000,
    landSF: 4523,
    SF: 1200,
    hardCostsPerSF: 100,
    softCostsPerSF: 25,
    vacancyRate: 5,
    operatingExpenseRate: 30,
    downPaymentRate: 20,
    loanTermYears: 30,
    loanRateAnnual:4.5,
    units: [1,2]
  }
]

const properties = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROPERTY':
      return state.concat({
        property_id: action.payload.property_id, 
        name:'New property',
        landCost: null,
        landSF: null,
        SF: null,
        hardCostsPerSF: null,
        softCostsPerSF: null,
        vacancyRate: 5,
        operatingExpenseRate: 30,
        downPaymentRate: 20,
        loanTermYears: 30,
        loanRateAnnual: 4,
        units: []
      })

    case 'UPDATE_PROPERTY':
      return state.map((property) => {
        console.log(action)
        if(property.property_id == action.payload.property_id) {
          return Object.assign({}, property, {
            [action.payload.key]: action.payload.value
          })
        }
        return property
      })

    case 'DELETE_PROPERTY':
      return state.filter((property)=>{
        return property.property_id != action.payload.property_id
      })

    case 'ADD_UNIT':
      return state.map((property) => {
        if(property.property_id == action.payload.property_id) {
          property.units.push(action.payload.unit_id)
          return property
        }
        return property
      })

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
