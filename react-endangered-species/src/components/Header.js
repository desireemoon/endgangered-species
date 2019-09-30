import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <nav>
          <h1>Endangered Species List</h1>
          <div className="detail-container">
            <div className="link-button">
              <button><Link className="link" to="/animalList">Animal List</Link></button>
            </div>
            <div className="link-button">
              <button><Link className="link" to="/randomAnimal">Random Animal</Link></button>
            </div>
          </div>

      </nav>
    );
  }
  
  export default Header