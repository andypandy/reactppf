const initialState = [
  {unit_id: 1, rent:5, sf: 1000},
  {unit_id: 2, rent:5, sf: 1000}
]


const units  = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_UNIT':
      state.concat(action.unit)

    default:
      return state;
  }
}

export default units
