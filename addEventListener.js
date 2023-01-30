/*


<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div>
    <button id="btn">Click Me</button>
  </div>
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

let x = function(event) {
  console.log(event.target)
  console.log(event.type, event.clientX, event.clientY)
  // alert("Hello World1!")
}

let y = function(e) {
  console.log(e)
  alert("Hello World2!")
}

btn.addEventListener('click', x)


// btn.addEventListener('click', y)

// let a = prompt("What is your favorite number?");


// if (a == "2") {
//   btn.removeEventListener('click', x)
// }
