// bubble sort -it can swap the value for the adjacent element comparision 

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example
console.log(bubbleSort([4, 2, 5, 1]));


//  Selection Sort-find the smallest element in each and passat the correct postion


