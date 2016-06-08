//Setup
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';

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
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const store = createStore(
  reducer, 
  persistedState,
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory))
)

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

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
