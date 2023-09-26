import React from 'react';
import { Link } from 'react-router-dom';

import './UserCard.scss';

export const UserCard = ({ user }) => {
  return (
    <div className="card">
      <div className="card__title">{user.name}</div>

      <Link
      className="card__link"
        to={`/users/${user.id}/posts`}
      >
        Open
      </Link>
    </div>
  );
};
