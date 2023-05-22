const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';

const getRequest = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getRequest as default };
