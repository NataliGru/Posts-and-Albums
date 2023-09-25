import { client } from './utils/fetchClient';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => {
  return client.get('/users');
};

export const getUserPosts = (userId) => {
  return client.get(`/posts?userId=${userId}`);
};

export const getUserAlbums = (userId) => {
  return client.get(`/albums?userId=${userId}`);
};

export const getPostComments = (postId) => {
  return client.get(`/comments?postId=${postId}`);
};
