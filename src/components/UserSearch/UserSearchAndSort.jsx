import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchWith } from '../../utils/searchHelper';

import './UserSearchAndSort.scss';

export const UserSearchAndSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const handleQueryChange = (event) => {
    const newQuery = event.target.value || null;

    const search = getSearchWith(searchParams, { query: newQuery });

    setSearchParams(search);
  };

  const handleOrderChange = (newOrder) => {
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
        <label>Sort by Name order:</label>
        <button onClick={() => handleOrderChange('ascend')} className="order">
          ↑
        </button>
        <button onClick={() => handleOrderChange('descend')} className="order">
          ↓
        </button>
      </div>
    </div>
  );
};
