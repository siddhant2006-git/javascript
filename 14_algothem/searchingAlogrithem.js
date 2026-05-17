// linear search- is searching which are used to shorted or unshorted data to check line by line

function linearsearching(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // not found
}

const number = [10, 20, 30, , 45, 40, 50];
console.log(linearsearching(number, 45));

// binary searching

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    return mid;

    if (arr[mid] === target) {
      return 0;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return -1; // not found
}
const numbers = [10, 20, 30, 40, 50, 60, 70];
console.log(binarySearch(numbers, 40));

// quick shorting

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [10, 20, 374, 373, 474, 335, 33];

console.log(quickSort(arr));
