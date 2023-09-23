const {
  HashRouter,
  // Navigate,
  Route,
  Routes,
} = require('react-router-dom');

const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" >
      </Route>
    </Routes>
  </HashRouter>
);

module.exports = {
  Root
};
