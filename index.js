import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import properties from './reducers/properties'
import MainContainer from './containers/MainContainer'
import PropertyContainer from './containers/PropertyContainer'
import AddPropertyContainer from './containers/AddPropertyContainer'
import Hey from './components/Hey'

//let store = createStore(reducers)
const store = createStore(
  combineReducers({
    properties,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={MainContainer} >
        <Route path="/property/:property_id" component={PropertyContainer} />
        <Route path="/addproperty" component={AddPropertyContainer} />
      </Route>
      <Route path="/hey" component={Hey} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
