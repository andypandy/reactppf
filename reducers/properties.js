//import {List, Map} from 'immutable';

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
    units: []
  },
  {
    property_id: 1, name: 'Another cool property', landCost: 0, landSF: 0, units: []
  }
]

const properties = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROPERTY':

      return state.concat(property)

    case 'UPDATE_PROPERTY':
      return state.map((property) => {
        if(property.property_id == action.property_id) {
          let newPropObj = {}
          newPropObj[action.key] = action.value
          return Object.assign({}, property, newPropObj)
        }
        return property
      })

    //Save to server - used to send it to server
    case 'SAVE_PROPERTY':
      //Save on localStorage
      //Clear window.confirm flag...

    default:
      return state;
  }
}


export default properties


// //Tests
// //Add
// expect(reactppfReducers([], {
//   type: 'ADD_PROPERTY',
//   property: {}
// }).length).toEqual(1);


// //Update
// let oldState = {
//   properties: [{
//     property_id: 123,
//     name: 'Untested property'
//   }]
// };

// let newState = reactppfReducers(oldState, {
//   property_id: 123,
//   name: 'Tested property'
// })

// expect(newState)[0].name).toEqual('Tested property');


// //Invalid type
// expect(reactppfReducers([], {type:'heyo!'})).toEqual([]);
