import { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Donuts from './Donuts'
import Cookies from './Cookies'
import Popcorn from './Popcorn'
import Home from './Home'
import NavBar from './NavBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/donuts">
          <Donuts />
        </Route>
        <Route exact path="/cookies">
          <Cookies />
        </Route>
        <Route exact path="/popcorn">
          <Popcorn />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
