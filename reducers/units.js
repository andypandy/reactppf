//const initialState = []
const initialState = [
  {unit_id: 1, name: 'Retail', rent:1.5, SF: 700},
  {unit_id: 2, name: 'Residential', rent:1.5, SF: 1000}
]


const units  = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_UNIT':
      return state.concat(action.payload)

    case 'DELETE_UNIT':
      return state.filter((unit)=>{
        return unit.unit_id != action.payload.unit_id
      })

    case 'UPDATE_UNIT':
      return state.map((unit)=>{
        if(unit.unit_id == action.payload.unit_id) {
          let newUnitObj = {
            [action.payload.key]: action.payload.value
          }
          return Object.assign({}, unit, newUnitObj)
        }
        return unit
      })

    default:
      return state;
  }
}

export default units
