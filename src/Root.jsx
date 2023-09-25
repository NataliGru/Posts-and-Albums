import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App.jsx';
import { UsersPage } from './pages/UsersPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { AlbumsList } from './components/AlbumsList.jsx';
import { UserContentPage } from './pages/UserContentPage.jsx';
import { PostsList } from './components/PostsList.jsx';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<UsersPage />} />

      <Route path="users/:userId?" element={<UserContentPage />}>
        <Route
          path="posts"
          element={<PostsList />}
        />

        <Route
          path="albums"
          element={<AlbumsList />}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);
