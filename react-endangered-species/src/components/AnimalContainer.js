import React from 'react';

const ArticleContainer = (props) => {
    //make class component and add componentdidmount and pass random function as a prop that componentdidmpoint will call
  
        return (
    
            <div className="artDeets-container">
            <div className="article-container">
                <h2>{props.animal && props.animal.name}</h2>
                <div className="img-container" >
                    <img src={`http://www.bloowatch.org/${props.animal && props.animal.image.url}`} alt={props.animal && props.animal.name}/>
                </div>
                <h3>Scientific Name: {props.animal && props.animal.scientific_name}</h3>
                <p>Description: {props.animal && props.animal.description}</p>
                <h3>Where does the {props.animal && props.animal.name} live?</h3>
                <p>{props.animal && props.animal.location}</p> 
                <p>{props.animal && props.animal.habitat}</p>
                <h3>What's the {props.animal && props.animal.name}'s endangered status?</h3>
                <p>{props.animal && props.animal.status}</p>
        <p>There are only around{props.animal && props.animal.population} left in the wild.</p>
            </div>
            </div>
    
        )
}


export default ArticleContainer