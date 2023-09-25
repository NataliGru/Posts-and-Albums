import React from 'react';
import { Link } from 'react-router-dom';

export const UsersList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>

            <td>
              <Link
                to={`/users/${user.id}`}
              >
                {user.name}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
