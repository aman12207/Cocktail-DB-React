import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
      </div>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} />
        <Route path='/cocktail/:id' component={SingleCocktail} />
        <Route path='*' component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
