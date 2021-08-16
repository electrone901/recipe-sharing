import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Home from './components/home/Home'
import DetailsRecipie from './components/details-recipe/DetailsRecipe'
import CreateRecipe from './components/create-recipe/CreateRecipe'

function App() {
  return (
    <Router className="App">
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />

        <Switch>
          <Route exact path="/create-recipe" component={CreateRecipe} />
          <Route path="/recipe/:recipeId" component={DetailsRecipie} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
