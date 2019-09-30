import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = ({
        animals: [],
        animal: ''
    })
  }

  grabAnimal = (animal) => {
    this.setState({
      animal: animal
    })
    console.log("check for animal", animal);
    
  }

   componentDidMount = async() => {
    const animalList = await Axios("http://www.bloowatch.org/developers/json/species/")
    console.log("animal list:", animalList.data.allSpecies);
    this.setState({
        animals: animalList.data.allSpecies
    })
    console.log("did it go to state:", this.state.animals);

}

  render() {
    return (
      <div className="App">
        <Header />
        <Main animals={this.state.animals} 
              animal={this.state.animal} 
              handleClick={this.grabAnimal}/>
        <Footer />
        
      </div>
    );
  }
}

export default () => (
  <Router>
    <App />
  </Router>
)