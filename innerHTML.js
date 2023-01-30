/* 

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Inner HTML</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  Hello world
  <span id="first" hidden><b>Hi</b>Hey I am span</span>
  <script src="script.js"></script>

  <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
</body>

</html>


------------------CSS--------------------
html, body {
  height: 100%;
  width: 100%;
}


*/

let x = document.getElementsByTagName('span')[0]
 console.log(x)
 let y = document.getElementsByTagName('span')[0]
console.dir(y)
 console.log(document.body.firstChild.nodeName) 
 console.log(document.body.firstElementChild.nodeName)

 first.innerHTML 
 first.innerHTML = "<i>hey I am italic</i>" 
 first.outerHTML 
 first.outerHTML = "<div>hey</div>"
 document.body.firstChild.data 
 console.log(document.body.textContent)
 first.hidden = false