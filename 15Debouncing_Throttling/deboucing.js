const search = document.getElementById("search");
const result = document.getElementById("result");

function debounce(callback, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

function searchData() {
  result.innerText = `Searching for: ${search.value}`;
}

const debouncedSearch = debounce(searchData, 1000);

search.addEventListener("input", debouncedSearch);
