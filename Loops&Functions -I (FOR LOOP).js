//Loops AND Functions
/*
for: block of code no of times
for in loop: through keys of an object
for of loop: through values of an object
while loop: blocked based on a specific once
	*/
//Program to add first n natural numbers
let sum = 0 
let n = 34

for(let i = 0 ; i <= 34 ; i++){
	sum += (i+1)
}
	console.log("Sum of first" + 34 + "natural numbers" + sum)


// FOR-IN LOOP
let obj = {
	harry: 90,
	shubh: 45,
	ananya :21,
	aanchal: 124,
	shiv: 23
}

//for printing just the KEYS
for(let a in obj) {
	console.log(a)
	console.log(obj[a])
}

for (let b of "Harry"){ // text in bracket here has to be iterable here 
	console.log(b)
}

