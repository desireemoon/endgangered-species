import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (

    <div className="header">
      <Link className="home-link" to="/" onClick={() => {
              window.scrollTo(0, 0)
          }}>
          <h1>Endangered Species List</h1>
        </Link>
      <nav>
        <Link className="link" to="/animals">
          <button className="link-button"
            onClick={() => {
              window.scrollTo(0, 0)
          }} >Animal List</button>
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
          <button className="link-button"
            onClick={() => {
              window.scrollTo(0, 0)
            }} >Status FAQ</button>
        </Link>

      </nav>

    </div>
  );
}

export default Header