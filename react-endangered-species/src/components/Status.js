import React from 'react'


const Status = (props) => {
    return (
        <div className="status-section">
            <h2 className="status-h2">What Does The Status Really Mean?</h2>
            <p className="status-p"> Each animal list will either have the status of vulnerable, endangered, and critically endangered. Below are explanations of each status:</p>
            <div className="status-container">
                <div className="status-boxes">
                    <h3>{props.animal && props.animal.status_legend[0].status}</h3>
                    <p>{props.animal && props.animal.status_legend[0].description}</p>
                </div>
                <div className="status-boxes">
                    <h3>{props.animal && props.animal.status_legend[1].status}</h3>
                    <p>{props.animal && props.animal.status_legend[1].description}</p>
                </div>
                <div className="status-boxes">
                    <h3>{props.animal && props.animal.status_legend[2].status}</h3>
                    <p>{props.animal && props.animal.status_legend[2].description}</p>
                </div>
            </div>
        </div>
    );
}

export default Status