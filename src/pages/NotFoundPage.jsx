import React from 'react';
import { NavLink } from 'react-router-dom';

import '../components/Navigation/Navigation.scss';

export const NotFoundPage = () => (
  <>
    <h1 className="title">Page not found</h1>

    <NavLink to="/" className="nav-item">
      Back to main
    </NavLink>
  </>
);
