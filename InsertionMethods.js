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
  I am start of this container (outer)
  <div class="container">
    I am start of this container (inner)
    <div id="first">I am the first element</div>
    I am end of this container (inner)
  </div>
  I am end of this container (outer)
  <script src="script.js"></script>

  <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
</body>

</html>

--------------------------------CSS------------------------
html, body {
  height: 100%;
  width: 100%;
}



*/

let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);