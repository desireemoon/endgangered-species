import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    // <nav>
    //     <h1>Endangered Species List</h1>
    //     <div className="detail-container">
    //       <div className="link-button">
    //         <Link className="link" to="/animals"><button>Animal List</button></Link>
    //       </div>
    //       <div className="link-button">
    //         <Link className="link" onClick={props.handleRandomClick} to="/random"><button>Random Animal</button></Link>
    //       </div>
    //       <div className="link-button">
    //         <Link className="link" to="/status"><button>Status FAQ</button></Link>
    //       </div>
    //     </div>

    // </nav>
    <div className="header">
      <h1>Endangered Species List</h1>
      <nav>
        <Link className="link" to="/animals">
          <button className="link-button">Animal List</button>
        </Link>
        <Link className="link"
          onClick={() => {
            props.handleRandomClick()
            window.scrollTo(0, 0)
          }} 
          to="/random">
          <button className="link-button">Random Animal</button>
        </Link>
        <Link className="link" to="/status">
          <button className="link-button">Status FAQ</button>
        </Link>

      </nav>

    </div>
  );
}

export default Header