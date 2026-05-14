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


