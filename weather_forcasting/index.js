const tempBtn = document.getElementById("temparature");
const input = document.getElementById("city");
const output = document.getElementById("output");

tempBtn.addEventListener("click", climate);

async function climate() {
  const url =
    "https://weather338.p.rapidapi.com/locations/get-details?placeid=69bedc6a5b6e977993fb3e5344e3c06d8bc36a1fb6754c3ddfb5310a3c6d6c87&language=en-US";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3b9ba73c5amshb36782d4fb8f2aep19f9d3jsnf7be6ebec27d",
      "x-rapidapi-host": "weather338.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  try {
    output.innerHTML = "";
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    const wheather = document.createElement("div");

    wheather.innerHTML = `
  <h2>${result.location.city}</h2>
  <p>Latitude: ${result.location.latitude}</p>
  <p>Longitude: ${result.location.longitude}</p>
  <p>Country: ${result.location.country}</p>
`;

    output.appendChild(wheather);
  } catch (error) {
    console.error(error);
  }
}
