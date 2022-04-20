import React, { Component } from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import TourList from './Components/TourList'

class App extends Component {
  render() {
    return (
      <div>
        <h1><Navbar/></h1>
        <TourList></TourList>
      </div>
    )
  }
}

export default App