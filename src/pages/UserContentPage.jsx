import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Navigation } from '../components/Navigation.jsx';

export const UserContentPage = () => {
  return (
    <div className="container">
      <div className="content-navigation">
        <Navigation />
      </div>

      <Outlet />
    </div>
  );
};
