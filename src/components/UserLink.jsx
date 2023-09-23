import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const UserLink = ({
  user: { id, name },
}) => {
  const [searchParams] = useSearchParams();

  return (
    <td>
      <Link
        to={{
          pathname: `/${id}`,
          search: searchParams.toString(),
        }}
      >
        {name}
      </Link>
    </td>
  );
};
