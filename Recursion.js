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

// Sum of N digits
function sumofn(num){
  if(num === 0){
    return 0
  }
  return num + sumofn(num-1)
}
console.log(sumofn(5))

// Sum of digits
function sumofDigits(num){
  if(num === 0){
    return 0
  }
  const digit = num % 10
  const rem = Math.floor(num/10)
  return digit + sumofDigits(rem)
}
console.log(sumofDigits(54321))

// Factorial 
function Factorial(num){
	if(num === 0){
  	return 1
  }
  return num * Factorial(num-1)
}
console.log(Factorial(5))
