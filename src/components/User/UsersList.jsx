import React from 'react';
import { UserCard } from './UserCard.jsx';

import './ListStyle.scss';

export const UsersList = ({ users }) => {
  return users.map((user) => {
    <UserCard user={user} key={user.id} />;
  });
};
