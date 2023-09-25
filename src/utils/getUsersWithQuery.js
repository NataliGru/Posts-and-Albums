import React from 'react';

function normalized(string) {
  return string.trim() ? string.toLowerCase().trim() : '';
}

export const getUsersWithQuery = ({
  users,
  query,
  sort,
  order,
}) => {
  let preparedUsers = users;

  if (query) {
    const normalizedQuery = normalized(query);

    preparedUsers = preparedUsers.filter(user => {
      const normalizedName = normalized(user.name);

      return normalizedName.includes(normalizedQuery);
    });
  }

  if (sort) {
    preparedUsers = [...preparedUsers].sort((u1, u2) => {
      switch (sort) {
        case 'name':
          return u1[sort].localeCompare(u2[sort]);

        case 'id':
          return u1[sort] - u2[sort];

        default:
          return 0;
      }
    });
  }

  if (order === 'descend') {
    preparedUsers.reverse();
  }

  return preparedUsers;
};

