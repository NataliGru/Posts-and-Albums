import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../utils/searchHelper';

export const UserSearchAndSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || '';

  const handleQueryChange = (event) => {
    const newQuery = event.target.value || null;

    const search = getSearchWith(searchParams, { query: newQuery });

    setSearchParams(search);
  };

  const handleSortChange = (event) => {
    const newSort = event.target.value || 'id';
    const search = getSearchWith(searchParams, { sort: newSort });

    setSearchParams(search);
  };

  const handleOrderChange = (event) => {
    const newOrder = event.target.value || 'ascend';
    const search = getSearchWith(searchParams, { order: newOrder });

    setSearchParams(search);
  };

  return (
    <div className="search-bar">
      <div className="search">
        <input
          type="search"
          className="input"
          placeholder="Search"
          value={query}
          onChange={handleQueryChange}
        />
      </div>

      <div>
        <label>Sort by:</label>
        <select value={sort} onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="id">ID</option>
        </select>
      </div>

      <div>
        <label>Sort order:</label>
        <select value={order} onChange={handleOrderChange}>
          <option value="ascend">Ascending</option>
          <option value="descend">Descending</option>
        </select>
      </div>
    </div>
  );
};
