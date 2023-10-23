import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  return (
    <nav className="breadcrumb">
        <li>
          <Link to="/">◄ Blog</Link>
        </li>
    </nav>
  );
};

export default Breadcrumb;