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

/**
 * Changes the background color of the document body at regular intervals.
 * 
 * If no interval is already running (validId is falsy), it immediately sets 
 * the background to a random color, then starts an interval that changes the 
 * background color every 2 seconds.
 * 
 * @function colorchanger
 * @returns {void}
 * 
 * @requires randomcolor - A function that generates and returns a random color value
 * @requires validId - A global variable that stores the interval ID (falsy if no interval is active)
 * 
 * @description
 * - Checks if validId is falsy to ensure only one interval runs at a time
 * - Sets an immediate background color change by calling randomcolor()
 * - Defines an inner function colorBgchange that updates the background color
 * - Starts a setInterval that calls colorBgchange every 2000 milliseconds (2 seconds)
 * - Stores the interval ID in validId for potential later cleanup
 * 
 * @example
//  * // Start changing background color every 2 seconds
 * colorchanger();
 */
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
