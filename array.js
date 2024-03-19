// Check for sorted array
const x = [1,2,3,5,6]

function checkSorted(num) {
  let flag = 'sorted';
  for(let i =0; i< num.length -1; i++){
    if(num[i] > num[i+1]){
      flag = "unsorted"
      break
    }
  }
  return flag
}
console.log(checkSorted(x))
