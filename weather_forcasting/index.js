const url =
  "https://ai-powered-weather-forecasting3.p.rapidapi.com/weather.php?id=2172797&units=Imperial";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "5eff430feemsh25241c2ea7b3417p14c988jsnf789b547105b",
    "x-rapidapi-host": "ai-powered-weather-forecasting3.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};
async function  displayweather() {
  

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
displayweather()
