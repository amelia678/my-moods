import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import MoodForm from './MoodForm/MoodForm'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/charts'>
          <div className='App'>
            <div>charts will go here</div>
          </div>
        </Route>
        <Route path='/'>
          <div className='App'>
            <MoodForm />
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
