import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import AnimalContainer from './AnimalContainer'
import Header from './Header';

class AnimalList extends Component {
    
    render() {
        console.log("is animallist showing in AL comp:", this.props.animals);
        
        return (
            <div>
            <div className="list-container">
                {this.props.animals.map((animal, index) => (
                    <Link
                        key={index}
                        onClick={() => this.props.handleClick(animal)}
                        to={`/animalList/${animal.name}`}
                    ><div className="animal-links"><p>{animal.name}</p></div></Link>))}
            </div>
            </div>
        )
    }

}

export default AnimalList