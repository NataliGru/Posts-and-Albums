import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App.jsx';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} >
      </Route>
    </Routes>
  </HashRouter>
);

