import React from 'react'

import Home from './containers/Home'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './containers/AboutMe'
import Recipes from './containers/Recipes'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'



function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/o_mnie" component={AboutMe} />
        <Route path="/receptury" component={Recipes} />

      </div>
    </Router>
  )
}

export default App
