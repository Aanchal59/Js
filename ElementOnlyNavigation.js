/*

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Portfolio Website</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <!--   this is me -->
  <nav>
    <ul>
      <li>Home</li>
      <li>About Me</li>
      <li>Hire me</li>
    </ul>
  </nav>

  <div class="container">
    <p>Hey I am a good boy</p>
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







--------------------CSS--------------------------
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}


ul{
  display: flex;
  background: grey;
  margin: 0;
  padding: 15px 0;
  color: white;
}
ul li{
  list-style: none;
  margin: 0 23px;
}

*/


const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("First Element child of b is: ", b.firstElementChild)