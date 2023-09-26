import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Navigation.scss';

export const Navigation = () => {
  const getLinkClassName = ({ isActive }) =>
    isActive ? 'active' : '';
  return (
    <nav className="navbar">
      <NavLink to="posts" className={cn('nav-item', getLinkClassName)}>
        Posts
      </NavLink>

      <NavLink to="albums" className={cn('nav-item', getLinkClassName)}>
        Albums
      </NavLink>

      <NavLink to="/" className={cn('nav-item', getLinkClassName)}>
        Back to main
      </NavLink>
    </nav>
  );
};
