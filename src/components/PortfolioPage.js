import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Check out the stuff I have done in the past.</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item One</Link>
  </div>
);

export default PortfolioPage;
