console.log("Operators in js")

let a = 10;
let b = 4;

console.log("a + b " , a+b)
console.log("a + b " , a-b)
console.log("a / b " , a/b)
console.log("a * b " , a*b)
console.log("a ** b " , a**b)
console.log("a % b " , a%b)

console.log(" Increment and Decrement Operators in js")

console.log("a++" , a++) 
console.log(a)
console.log("a--" , a--) 
console.log(a)
console.log("++a" , ++a) 
console.log(a)
console.log("a--" , a--) 
console.log(a) 

//Assignment Operators
let assignment = 1;
assignment += 5 //same as assignment = assignment +5
console.log("a is now = ",a)
assignment -= 5 //same as assignment = assignment -5
console.log("a is now = ",a)
assignment *= 5 //same as assignment = assignment *5
console.log("a is now = ",a)
assignment /= 5 //same as assignment = assignment /5
console.log("a is now = ",a)


//Comparison operators

let comp1= 6;
let comp2="6";
console.log("comp1== comp2",  comp1 ==comp2)
console.log("comp1== comp2",  comp1 !=comp2)

console.log("comp1=== comp2",  comp1 ===comp2) // as type of data in comp1 and comp2 is different but the value is same.
console.log("comp1!== comp2",  comp1 !==comp2)

//Logical operators: && and || and ! : Operates on Boolean
let x  =5;
let y =6;
console.log(x>y && x==5)
console.log(x>y || x==5)
console.log(!false)

//TYPE AND BITWISE OPERATORS