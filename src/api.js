import { client } from './utils/fetchClient';

export const getUsers = () => {
  return client.get('/users');
};

export const getUserContent = (contentType, userId) => {
  return client.get(`/${contentType}?userId=${userId}`);
};

export const getPostComments = (postId) => {
  return client.get(`/posts/${postId}/comments`);
};

export const getAlbumPhotos = (albumId) => {
  return client.get(`/albums/${albumId}/photos`);
};
