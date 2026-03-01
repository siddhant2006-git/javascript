// Random colour generate

const randomcolor = function () {
  let hexvalue = "0123456789aABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * 16);
    color += hexvalue[index];
  }
  return color;
};

const color = randomcolor();
console.log(color);

let validId;

const colorchanger = function () {
  if (!validId) {
    document.body.style.backgroundColor = randomcolor();
  }
  function colorBgchange() {
    document.body.style.backgroundColor = randomcolor();
  }

  validId = setInterval(colorBgchange, 2000);
};

const stopcolor = function () {
  clearInterval(validId);
  validId = null;
};

document.querySelector("#starts").addEventListener("click", colorchanger);

document.querySelector("#stops").addEventListener("click", stopcolor);
