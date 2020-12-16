import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Charts from './Charts/Charts'
import DefaultLayout from './layouts/DefaultLayout'
import MoodForm from './MoodForm/MoodForm'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/charts'>
          <DefaultLayout>
            <Charts />
          </DefaultLayout>
        </Route>
        <Route path='/'>
          <DefaultLayout>
            <MoodForm />
          </DefaultLayout>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
