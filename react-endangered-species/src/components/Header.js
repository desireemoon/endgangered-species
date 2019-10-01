import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
      <nav>
          <h1>Endangered Species List</h1>
          <div className="detail-container">
            <div className="link-button">
              <Link className="link" to="/animals"><button>Animal List</button></Link>
            </div>
            <div className="link-button">
              <Link className="link" onClick={props.handleRandomClick} to="/random"><button>Random Animal</button></Link>
            </div>
            <div className="link-button">
              <Link className="link" to="/status"><button>Status FAQ</button></Link>
            </div>
          </div>

      </nav>
    );
  }
  
  export default Header