console.log("*----------------------------*")

//concat
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]

let newArray = num.concat(num_more)
console.log(newArray)
console.log(num, num_more)


console.log("*----------------------------*")
//sort

let arr = [551,22,3,14,5,6,7,8,229]
arr.sort()
console.log(arr)
let compare = (a,b)=>{
	return a-b
}
arr.sort(compare)
console.log(arr)

console.log("*----------------------------*")
//SPLICE : adds new items to an array

let vid = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = vid.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(vid)
console.log(deletedValues)

console.log("*----------------------------*")
//SLICE: slices out a piece from an array
//It contains a new array

let arr01 = vid.slice(3,5)
console.log(arr01)
