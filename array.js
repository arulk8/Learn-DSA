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

// Move zeros to end
function navieMoveZero(a){
  for(let i =0; i< a.length; i++){
    if(a[i] === 0){
      for(let j = i+1; j< a.length; j++){
        if(a[j] !== 0){
          [a[i], a[j]] = [a[j], a[i]]
          break;
        }
      }
    }
  }
  return a
}


const x = [1,0,0,9,5,6,0,7]
console.log(navieMoveZero(x))

// Move all the zeros to end
// this uses two pointer method
const x = [1,2,0,5,6,0,0,1,0]
let count = 0
for(let i=0; i< x.length; i++){
	if(x[i] !== 0){
  	[x[i], x[count]] = [x[count], x[i]]
    count++
  }
}

console.log(x)
