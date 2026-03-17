
// fetch = method is used to fetch data from an api or server(it cannot final data  show the user )
// fetch api -error when there is a network error and not request to server

// if error is 404 are not consider the error in fetch api
// 404-http error from the server

// Using .then().catch()
// then -if the function can be resolve then it will display the  data to user
// catch -if the fuction can be reject then it will throw to the function

fetch("https://api.github.com/users/github")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// Using async/await with try/catch
// async-it is used show the background and not blocking the thread in js
// await function-is the async function which are pause the resolve and reject value.
// try - it can check the conditon in  time 
// catch - it can store the error and throw the error from the function

async function getGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getGitHubUser("github");

// fetch work in js - which are exchange the async data formation
