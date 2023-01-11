//Practise Set

//1. Use logical Operators to find whether the age of a person lies between 10 and 20?

let age= prompt("Hi, what is your age")
if(age > 10 && age < 20){
	console.log("Your age lies between 10 and 20")
}
else{
	console.log("You age doesn't lie between 10 and 20.")
}

//2. Demonstrate the suse of switch case statements in Javascript

switch(age){
	case 12: 
		console.log("Your age is 12")
		break;

	case 13: 
		console.log("Your age is 13")
		break;

	case 15: 
		console.log("Your age is 15")
		break;

	default: 
		console.log("Your age is not special")
		
	}



//3. Write a javascript program to find whether a number is divisible by 2 and 3.

let num= prompt("Hi, what is your age")
num= Number.parseInt(num)
if(num % 2 ==0  && num %3 ==0){
	console.log("divisible by 2 and 3")
}
else{
	console.log("Not divisible by 2 and 3")
}

//4. Write a js program to find whether a number is divisible by 2 or 3.
let num= prompt("Hi, what is your age")
num= Number.parseInt(num)
if(num % 2 ==0 ){
	console.log("divisible by 2")
}
else if(num %3 ==0){
	console.log("divisible by 3")
}



//5. Print"You can drive" or "You can't Drive" based on age being greater than 18 using ternary operator.
let age01= 19
let a = age>18 ? "You can drive" : "You can't drive"
console.log(a)