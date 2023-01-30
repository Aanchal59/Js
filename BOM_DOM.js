/* BOM_DOM

Window object represents browser window and provides methods to control it.It is a global object.

DOM

Dom represents the page content as HTML.

document.body -> Page body as Js Object
document.body.style.background = "green" -> changes page background to green

Browser Object Model(BOM)

The Browser Object Model represents additive objects provided by the browser (host environment) for working with everything except the document.

The functions alert/confirm/prompt are also a part of the BOM.

location.href = "https://codewithharry.com" -> Redirect to another URL.

*/


/* ------------HTML-----------

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
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





// ---------------------CSS--------------------
html, body {
  height: 100%;
  width: 100%;
}

*/

// Javascript
window.console.log(window)
console.log(document.body)
document.body.style.background = "yellow"