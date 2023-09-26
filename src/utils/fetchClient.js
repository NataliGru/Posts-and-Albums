const BASE_URL = 'https://jsonplaceholder.typicode.com';

function wait(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}


function request(
  url,
  method = 'GET',
  data = null, // we can send any data to the server
) {
  const options = { method };

  if (data) {
    // We add body and Content-Type only for the requests with data
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  // for a demo purpose we emulate a delay to see if Loaders work
  return wait(300)
  .then(() => fetch(BASE_URL + url, options))
  .then(response => response.json());
}

export const client = {
  get: (url) => request(url),
};
