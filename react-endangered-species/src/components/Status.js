import React from 'react'


const Status = (props) => {
    // console.log("lets grab that legend", props.animals[0].status_legend);
    
    return (
      <div className="status-container">
          <h2>What Does The Status Really Mean?</h2>
          <p
          > Each animal list will either have the status of vulnerable, endangered, and critically endangered. Below are explanations of each status:</p>
         <div className="status-boxes">
            <h3>{props.animals && props.animals[0].status_legend[0].status}</h3>
            <p>{props.animals && props.animals[0].status_legend[0].description}</p>
        </div> 
        <div className="status-boxes">
            <h3>{props.animals && props.animals[0].status_legend[1].status}</h3>
            <p>{props.animals && props.animals[0].status_legend[1].description}</p>
            </div> 
        <div className="status-boxes">
            <h3>{props.animals && props.animals[0].status_legend[2].status}</h3>
            <p>{props.animals && props.animals[0].status_legend[2].description}</p>
        </div>
      </div>
    );
  }
  
export default Status