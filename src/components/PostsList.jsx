import React, { useEffect, useState } from 'react';
import { getUserPosts } from '../api';
import { useParams } from 'react-router-dom';


export const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { userId } = useParams();
  const selectedUser = userId ? +userId : 0;
  console.log(selectedUser);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    getUserPosts(selectedUser)
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
        console.log(fetchedPosts);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [selectedUser]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>

              <td>{post.title}</td>

              <td>{post.body}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
