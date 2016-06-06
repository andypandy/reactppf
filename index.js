//Setup
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

//Reducers
import ui from './reducers/ui'
import forms from './reducers/forms'
import properties from './reducers/properties'
import propertyList from './reducers/propertyList'
import units from './reducers/units'

//Containers
import IndexContainer from './containers/IndexContainer'
import PropertyContainer from './containers/PropertyContainer'

import css from './css/style.css'

// //Configure store
const reducer = combineReducers({
  ui, 
  forms, 
  properties,
  units,
  propertyList,
  routing: routerReducer
})
const store = createStore(
  reducer, 
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory))
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={IndexContainer} />
      <Route path="/property/:property_id" component={PropertyContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
