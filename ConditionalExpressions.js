let a = prompt("Hey, What's your age?")
console.log(typeof a)



//2
let b= prompt("HIIIIIII!!!")
b = Number.parseInt(a) //COnverting a string to a number
console.log(typeof b)


if(b<0){
	alert("This is a valid Age")
}
else if(b<9){
	alert("You are a kid and you cannot even think of driving")

}
else if(b < 18 && b>=9){
	alert("You are a kid and you can think of driving after 18.")
}
else{
	alert("This is an invalid age")
}
console.log("Done")

//Ternary Operator- Executes a block of code based on the condition

console.log("You can",b<18? "not drive":"drive")