// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/joke-api';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <div id="joke-setup"></div>
    <div id="joke-delivery"></div>
    <button class="btn btn-warning" id="joke-btn">GET A JOKE</button>
  `;

  let data;
  document.querySelector('#joke-btn').addEventListener('click', () => {
    console.warn(document.querySelector('#joke-btn').innerText);
    if (document.querySelector('#joke-btn').innerText === 'GET A JOKE') {
      getRequest().then((joke) => {
        document.querySelector('#joke-setup').innerHTML = joke.setup;
        data = joke;
        document.querySelector('#joke-btn').innerText = 'GET PUNCHLINE';
      });
    } else if (document.querySelector('#joke-btn').innerText === 'GET PUNCHLINE') {
      document.querySelector('#joke-delivery').innerHTML = data.delivery;
      document.querySelector('#joke-btn').innerText = 'GET A NEW JOKE';
    } else {
      document.querySelector('#joke-setup').innerHTML = '';
      document.querySelector('#joke-delivery').innerHTML = '';
      document.querySelector('#joke-btn').innerText = 'GET A JOKE';
    }
  });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
