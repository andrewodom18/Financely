import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Features from './views/features'
import Register from './views/register'
import Contact from './views/contact'
import Login from './views/login'
import About from './views/about'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Features} exact path="/features" />
        <Route component={Register} exact path="/register" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Login} exact path="/login" />
        <Route component={About} exact path="/about" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
