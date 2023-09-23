import React, { useEffect, useMemo, useState } from 'react';
import { getUsers } from '../api';
import { useSearchParams } from 'react-router-dom';
import { getUsersWithQuery } from '../utils/getUsersWithQuery';
import { UsersList } from '../components/UsersList.jsx';

export const HomePage = () => {
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
        console.log(fetchedUsers)
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [])
  console.log(users)

  const visibleUsers = useMemo(
    () =>
      getUsersWithQuery({
        users,
        query,
        sort,
        order,
      }),
    [users, searchParams],
  );

  return (
    <>
      <h1 className="title">Home Page</h1>

      <div data-cy="UsersList">
        <p className="title">Users:</p>
        <UsersList users={visibleUsers} />
      </div>
    </>
  );
};
