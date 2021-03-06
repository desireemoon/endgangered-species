import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class AnimalList extends Component {

    render() {
        return (
            <div>
                <div className="list-container">
                    {/* maps out all the animal links with images */}
                    {this.props.animals.map((animal, index) => (
                        <Link
                            key={index}
                            onClick={() => {
                                this.props.handleClick(animal)
                                window.scrollTo(0, 0)
                            }}
                            to={`/animals/${animal.name}`}
                            className="link-decor"
                        >
                            <div className="link-container">
                                <div className="img-container" >
                                    <img className="link-img" src={`http://www.bloowatch.org/${animal && animal.image.url}`} alt={animal && animal.name} />
                                </div>
                                <div className="animal-links">
                                    <p>{animal.name}</p>
                                </div>
                            </div>
                        </Link>))}
                </div>
            </div>
        )
    }

}

export default AnimalList