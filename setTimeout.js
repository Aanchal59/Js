/*

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>setTimeout and setInterval</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  Hello world
  <script src="script.js"></script>

 <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> 
</body>

</html>


*/


document.write("Hello")

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c))
  a + b
}

setTimeout(sum, 1000, 1, 2, 7)
// setInterval(function() {
//   alert("setinterval")
// }, 3000)

// let a = setTimeout(function() {
//   alert("I am inside of settimeout")
// }, 5000)

// let b = prompt("Do you want to run the settimout?")
// if ("n" == b) {
//   clearTimeout(a)
// }
// console.log(a)
