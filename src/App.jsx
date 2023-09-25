import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
