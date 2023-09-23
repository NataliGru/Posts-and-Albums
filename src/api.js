const API_URL = 'https://jsonplaceholder.typicode.com';

export function getUsers() {
  return fetch(`${API_URL}/users`)
    .then((res) => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}

export function getUserAlbums(userId) {
  return fetch(`${API_URL}/albums?userId=${userId}`)
    .then((res) => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}

export function getUserPosts(userId) {
  return fetch(`${API_URL}/posts?userId=${userId}`)
    .then((res) => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}

export function getPostComments(postId) {
  return fetch(`${API_URL}/comments?postId=${postId}`)
    .then((res) => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}
