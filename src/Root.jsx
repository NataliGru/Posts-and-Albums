import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { App } from './App.jsx';
import { UsersPage } from './pages/UsersPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { UserContentPage } from './pages/UserContentPage.jsx';
import { ContentList } from './components/Content/ContentList.jsx';
import { ContentDetailsPage } from './pages/ContentDetailsPage.jsx';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<UsersPage />} />

      <Route path="users/:userId?" element={<UserContentPage />}>
        <Route path=":contentType?" element={<ContentList />}>
        </Route>

      </Route>

          <Route path='users/:userId/:contentType/:contentId/details' element={<ContentDetailsPage />} />


      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);
