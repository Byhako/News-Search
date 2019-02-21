import React, { Component, Fragment }  from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './Home'


class AppRouter extends Component {

  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default AppRouter
