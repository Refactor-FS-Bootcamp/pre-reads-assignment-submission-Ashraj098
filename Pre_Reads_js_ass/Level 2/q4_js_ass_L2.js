//javaScript program to print the frequency of a character in a string.

let arr = [1, 1, 2, 2, 2, 4, 4, 6, 7, 0, 9, 9, 8, 8]

function freq(arr){
    let countArr= []
    for(let i = 0; i < 10; i++)
      countArr[i] = 0
  
    for(let i = 0; i < arr.length; i++){
      countArr[arr[i]] ++;
    }
    for(let i = 0; i <10; i++){
      console.log(`${i} appeared ${countArr[i]} times.`)
    }
  }
  
  
  freq(arr)