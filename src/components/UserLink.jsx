import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const UserLink = ({ user: { id, name }, onSelectedUserId }) => {
  const [searchParams] = useSearchParams();

  return (
    <Link
      onClick={() => onSelectedUserId(id)}
      to={{
        pathname: `/users/${id}`,
        search: searchParams.toString(),
      }}
    >
      {name}
    </Link>
  );
};
