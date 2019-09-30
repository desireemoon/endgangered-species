import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = ({
        animals: [],
        animal: ''
    })
  }

  grabArticleDeets= (animal) => {
    this.setState({
      animal: animal
    })
    console.log("check for animal", animal);
    
  }

  async componentDidMount() {
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
        
      </div>
    );
  }
}

export default () => (
  <Router>
    <App />
  </Router>
)