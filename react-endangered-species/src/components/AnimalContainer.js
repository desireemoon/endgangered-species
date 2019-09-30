import React from 'react';

const ArticleContainer = (props) => {
  
        return (
    
            <div className="artDeets-container">
            <div className="article-container">
                <h2>{props.animal.name}</h2>
                <div className="img-container" >
                    <img src={`http://www.bloowatch.org/${props.animal.image.url}`} alt={props.animal.name}/>
                </div>
                <h3>Scientific Name: {props.animal.scientific_name}</h3>
                <p>Description: {props.animal.description}</p>
                <h3>Where does the {props.animal.name} live?</h3>
                <p>{props.animal.location}</p> 
                <p>{props.animal.habitat}</p>
                <h3>What's the {props.animal.name}'s endangered status?</h3>
                <p>{props.animal.status}</p>
        <p>There are only around{props.animal.population} left in the wild.</p>
            </div>
            </div>
    
        )
}


export default ArticleContainer