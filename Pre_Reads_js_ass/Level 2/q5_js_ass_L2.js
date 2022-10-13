// JavaScript program to sort the elements of the array (without using sort function).

function sortArr(arr){
    for(let i = 0; i < arr.length-1; i++){
      for(let j = 0; j < arr.length-1-i; j++){
        if(arr[j] > arr[j+1]){
          let tmp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = tmp
        }
      }
    }
    return arr;
    
  }
  
  let arr = [3, 4, 2, 1]
  console.log(sortArr(arr))