import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Home from '../../pages/Home'
import Login from '../../pages/Login'
import LoginAuthCode from '../../pages/LoginAuthCode'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/auth-code" exact component={LoginAuthCode} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
