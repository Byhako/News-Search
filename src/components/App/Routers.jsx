import React, { Component, Fragment }  from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './Home'
import Results from './Results'


class AppRouter extends Component {

  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/results' component={Results} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default AppRouter
