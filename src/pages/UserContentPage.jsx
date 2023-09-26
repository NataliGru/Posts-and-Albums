import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from '../components/Navigation/Navigation.jsx';

export const UserContentPage = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
