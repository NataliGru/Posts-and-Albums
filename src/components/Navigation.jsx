import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const getLinkClassName = ({ isActive }) =>
    'nav-item' + isActive ? "__active" : "";
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="posts" className={getLinkClassName}>
          Posts
        </NavLink>

        <NavLink to="albums" className={getLinkClassName}>
          Albums
        </NavLink>

        <NavLink to="/" className={getLinkClassName}>
          Back to main
        </NavLink>
      </div>
    </nav>
  );
};
