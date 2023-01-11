// Chapter 01
// 01. Create a variable of type string and try to add a number to it

let a ="aanchal"
let b= 6
console.log(a+b) //concatenates

// 02. Use a typeof operator to find the data type of the string in last question
console.log(typeof(a+b))
//03. Create a const object in js. CAn you change it to hold a number later?


const a1 = {
	name:"aanchal",
	section:1,
	isPrincipal:false
}

//a =54 //gives error


//04. Try to add a new key to the const object in problem 3. Were you able to do it?
a1['friend'] = "riya"
a1['name'] ="ananya"
console.log(a1)
//05. Write a Js program to create a word-meaning dictionary of 5 words.
const dict = {
	appreciate:"recognize the full worthy of",
	ataraxia:" a state of freedom from emotional disturbance and anxiety",
	yakka:"hardwork"

}
console.log(dict)