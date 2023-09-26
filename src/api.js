import { client } from './utils/fetchClient';

export const getUsers = () => {
  return client.get('/users');
};

export const getUserContent = (contentType, userId) => {
  return client.get(`/${contentType}?userId=${userId}`);
};
