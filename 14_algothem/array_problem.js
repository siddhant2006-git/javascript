// bubble sort -it can swap the value for the adjacent element comparision 


  const arr=[12,34,54,13,23,20]
  let n = arr.length;

  for (i = 0; i < n; i++){
    for (j = 0; j < n - 1; j++){
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1]=temp
        
    }

    }
}
  console.log(arr)



// Example



//  Selection Sort-find the smallest element in each and passat the correct postion


const arra = [10, 20, 374, 373, 474, 335, 33];
const p = arra.length;

for (let i = 0; i < p - 1; i++) {
  let minindex = i;

  for (let j = i + 1; j < p; j++) {
    if (arra[j] < arra[minindex]) {
      minindex = j;
    }
  }

  if (minindex !== i) {
    [arra[i], arra[minindex]] = [arra[minindex], arra[i]];
  }
}

console.log(arra);


