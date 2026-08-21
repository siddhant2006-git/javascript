const search = document.getElementById("search");
const result = document.getElementById("result");

function throttle(callback, delay) {
  let lastTime = 0;

  return function () {
    const currentTime = Date.now();

    if (currentTime - lastTime >= delay) {
      callback();
      lastTime = currentTime;
    }
  };
}

function searchData() {
  result.innerText = `Searching for: ${search.value}`;

  console.log("API call:", search.value);
}

const throttledSearch = throttle(searchData, 1000);

search.addEventListener("input", throttledSearch);
