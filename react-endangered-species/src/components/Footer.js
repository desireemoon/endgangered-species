import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className="footer">
            <div class="social-title">
                <h2>Connect with the programmer</h2>
            </div>
            <div class="social-links">
                <div class="social"><a href="https://www.linkedin.com/in/desiree-dewysocki"><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" /></a></div>
                <div class="social"><a href="https://github.com/desireemoon"><FontAwesomeIcon icon={['fab', 'github']} size="3x" /></a></div>
                <div class="social"><a href="mailto:desiree.dewysocki@gmail.com"><FontAwesomeIcon icon="envelope-square" size="3x" /></a></div>
            </div>
        </div>
    );
  }
  
  export default Footer

