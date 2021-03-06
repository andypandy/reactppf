const initialState = []

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
        units: [],
        capRate: null,
        borrowersNetWorth: null,
        borrowersIncome: null
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
