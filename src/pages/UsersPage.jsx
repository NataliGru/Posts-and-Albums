import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getUsers } from '../api';

import { getUsersWithQuery } from '../utils/getUsersWithQuery';
import { UserSearchAndSort } from '../components/UserSearch/UserSearchAndSort.jsx';
import { UserCard } from '../components/User/UserCard.jsx';
import { Loader } from '../components/Loader/Loader.jsx';

import './UsersPage.scss';

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const order = searchParams.get('order') || '';

  useEffect(() => {
    setIsLoading(true);

    getUsers()
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
      })
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }, []);

  const visibleUsers = useMemo(() => {
    const usersWithQuery = getUsersWithQuery({
      users,
      query,
      order,
    });
    return usersWithQuery;
  }, [users, query, order]);

  return (
    <>
      <p className="title">Users Page</p>

      {users.length === 0 && isLoading && <Loader />}
      {!isLoading && <UserSearchAndSort />}

      {
        <>
          {visibleUsers.length !== 0 && !isLoading && (
            <div className="usersList">
              {visibleUsers.map((user) => (
                <UserCard user={user} key={user.id} />
              ))}
            </div>
          )}

          {query !== '' && visibleUsers.length === 0 && !isLoading && (
            <p className="no-results">No results found.</p>
          )}
        </>
      }
    </>
  );
};
