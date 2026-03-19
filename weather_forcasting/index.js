const url =
  "https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=40.730610&longitude=-73.935242&lang=EN";
const options = {
  method: "GET",
  headers: {
    "API Key": "0c618a6833f8400891294946261703",
    "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};
async function wheathershow() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
 }
wheathershow()


