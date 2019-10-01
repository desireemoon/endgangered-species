import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelopeSquare)


class App extends Component {
  constructor (props) {
    super(props)
    this.state = ({
        animals: [],
        animal: '',
        randomAnimal: ''
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
    console.log("animal list:", animalList);
    this.setState({
        animals: animalList.data.allSpecies
    })
    console.log("did it go to state:", this.state.animals);
  }

  getRandomNum = () => {
    return Math.floor(Math.random() * (13));
  }

  getRandomAnimal = () => {
  const randomAnimal = this.state.animals[this.getRandomNum()]
  console.log(randomAnimal);
  this.setState({ 
    randomAnimal: randomAnimal 
    })
    // debugger;
    // console.log("is it random:", this.props.animals[this.getRandomNum()]);
    console.log("show random state pls:", this.state.randomAnimal);
    
  }

  render() {
    return (
      <div className="App">
        <Header handleRandomClick={this.getRandomAnimal}/>
        <Main animals={this.state.animals} 
              animal={this.state.animal} 
              handleClick={this.grabAnimal}
              randomAnimal={this.state.randomAnimal}
              handleRandomClick={this.getRandomAnimal}
              />
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