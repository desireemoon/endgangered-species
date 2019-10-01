import React from 'react'


const Status = (props) => {
    console.log("lets grab that legend", props.animals[0].status_legend);
    
    return (
      <div className="status-container">
          <h1>What Does The Status Really Mean?</h1>
          <p>There are three status types each animal will fall into: vulnerable, endangered, and critically endangered. Below are explanations of each status:</p>
          <h2>{props.animals && props.animals[0].status_legend[0].status}</h2>
          <p>{props.animals && props.animals[0].status_legend[0].description}</p>
          <h2>{props.animals && props.animals[0].status_legend[1].status}</h2>
          <p>{props.animals && props.animals[0].status_legend[1].description}</p>
          <h2>{props.animals && props.animals[0].status_legend[2].status}</h2>
          <p>{props.animals && props.animals[0].status_legend[2].description}</p>
      </div>
    );
  }
  
export default Status