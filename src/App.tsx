import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Charts from './Charts/Charts'
import MoodForm from './MoodForm/MoodForm'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/charts'>
          <div className='App'>
            <h3>My Moods</h3>
            <Charts />
          </div>
        </Route>
        <Route path='/'>
          <div className='App'>
            <h3>My Moods</h3>
            <MoodForm />
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App