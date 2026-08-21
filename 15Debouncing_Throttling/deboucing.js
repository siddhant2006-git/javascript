const searchInput = document.getElementById("search");
const result = document.getElementById("result");

let timer;

searchInput.addEventListener("input", function () {
  clearTimeout(timer);

  timer = setTimeout(() => {
    const value = searchInput.value;

    result.innerText = `Searching for: ${value}`;

    console.log("API Call:", value);
  }, 500);
});
