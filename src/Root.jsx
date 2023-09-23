import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { UsersList } from './components/UsersList.jsx';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage usersList={<UsersList />} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
