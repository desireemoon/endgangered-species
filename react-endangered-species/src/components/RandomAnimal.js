import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import AnimalContainer from './AnimalContainer'

class RandomAnimal extends Component {
    
    getRandomNum = () => {
        return Math.floor(Math.random() * (13));
    }

    getRandomAnimal = () => {
        return this.props.animals[this.getRandomNum()]

    }

    render() {
        console.log("is animallist showing in AL comp:", this.props.animals);

        return (
            <div>
            {/* <div className="list-container">
                    <Link
                        key={index}
                        onClick={() => this.props.handleClick(animal)}
                        to={`/randomAnimal/${animal.name}`}
                    ><div className="animal-links"><p>{animal.name}</p></div></Link>))}
            </div> */}
            </div>
        )
    }

}

export default RandomAnimal