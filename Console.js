/*Console

1. assert(): used to assert a
2. clear(): clears the console
3. log(): Outputs a message to the console
4. table(): Displays a tabular data
5. warm(): Used for warnings
6. error(): Used for errors
7. info(): Used for Special info
*/



console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err" != false)
console.assert("err" == false)

console.time("forLoop")

for (let i = 0; i < 500; i++) {
  console.log(233)
}

console.timeEnd("forLoop")

console.time("whileLoop")

let i = 0;
while (i < 500) {
  console.log(233)
  i++;
}

console.timeEnd("whileLoop")