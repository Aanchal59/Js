let num = [3, 5, 1, 2, 4]

for(let i=0; i<num.length;i++){
console.log(num[i])
}

//FOR EACH LOOP

console.log("FOR EACH LOOP")

console.log("*--------------------------*")
num.forEach((element) => {
  console.log(element * element)
})

//creating from an array

let name = "aanchal"
let arr = Array.from(name)
console.log(arr)
console.log("*--------------------------*")
//for of loop- shortcut for accessing an array

for (let item of num){
  console.log(item)
}

// for...in
for (let i in num){
  console.log(num[i])
}
