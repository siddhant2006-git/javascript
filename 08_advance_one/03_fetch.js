// fetch = method is used to fetch data from an api or server
// fetch api error when there is a network error and not request to server

// if error is 404 are not consider the error in fetch api

// Using .then().catch()
fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


// Using async/await with try/catch
async function getGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getGitHubUser('github');

// fetch work in js - which are exchange the async data formation 
  