import React, { useEffect, useState } from 'react';
import { getUserAlbums } from '../api';
import { Outlet, useParams } from 'react-router-dom';


export const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { userId } = useParams();
  const selectedUser = userId ? +userId : 0;
  console.log(selectedUser);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    getUserAlbums(selectedUser)
      .then((fetchedAlbums) => {
        setAlbums(fetchedAlbums);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [userId]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {albums.map((album) => (
          <tr key={album.id}>
            <td>{album.id}</td>

            <td>
              {album.title}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
