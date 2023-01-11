console.log("var, let and const")

//var a = 45;
//var b = "Aanchal";
//var c = null;
//var d = undefined


let b= "Aanchal";
let c= null
let d = undefined

//As Js Evolved, globally change na kare, kisi variable ko.

//Create a block
{
	let b='this' // shows: let is BLOCK SCOPED
	console.log(b)
}
 console.log(b) 
// and not just this -> console.log(b) 
// var is GLOBALLY SCOPED, can be updated and redeclared within its scope



//const

 // const can't be updated and redeclared

 const author ="Aanchal"

 //let author =5 gives "author has been declared already in output"
 // const harry; // Has to be initialised
 