// Print number from N to 1
function printNto1(num){
  if(num === 0){
    return
  }
	console.log(num)
  printNto1(num-1)
}

printNto1(5)

// Print number from 1 to N
function print1ton(num){
  if(num === 0){
    return
  }
	
  print1ton(num-1)
  console.log(num)
}

print1ton(5)
