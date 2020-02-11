import React from 'react'

import Home from './containers/Home'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Hero />

    </div>
  )
}

export default App