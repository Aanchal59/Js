//Map, Filter and Reduce


//map() : creates a new array by performing the same operation on each array content

let arr = [45, 23, 21]
// Array map method
let a = arr.map((value, index, array) => {
 	console.log(value, index, array)
  	return value + index
})

//filter():

let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})


// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)