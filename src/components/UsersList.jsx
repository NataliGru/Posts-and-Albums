import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { UserLink } from './UserLink.jsx';
import classNames from 'classnames';


export const UsersList = ({ users }) => {
  return (
    <table
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr
            key={user.slug}
          >
            <UserLink user={user} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
