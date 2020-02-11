import React from 'react'

import Home from './containers/Home'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './containers/AboutMe'
import Post from './containers/Post'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'



function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/o_mnie" component={AboutMe} />
        <Route path="/Post/:postId" component={Post} />

      </div>
    </Router>
  )
}

export default App
