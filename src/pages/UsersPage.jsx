import React, { useEffect, useMemo, useState } from 'react';
import './UsersPage.scss';

import { getUsers } from '../api';
import { useSearchParams } from 'react-router-dom';
import { getUsersWithQuery } from '../utils/getUsersWithQuery';
import { UsersList } from '../components/UsersList.jsx';
import { UserSearchAndSort } from '../components/UserSearchAndSort.jsx';

export const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || '';

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    getUsers()
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
        console.log(fetchedUsers);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const visibleUsers = useMemo(
    () =>
      getUsersWithQuery({
        users,
        query,
        sort,
        order,
      }),
    [users, query, sort, order,]
  );

  return (
    <>
      <h1 className="title">Users Page</h1>

      <UserSearchAndSort />

      {visibleUsers.length !== 0 && (
        <>
          <div className="UsersList">
            <UsersList
              users={visibleUsers}
            />
          </div>
        </>
      )}
    </>
  );
};
