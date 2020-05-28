
var html = document.body.innerHTML;
var regex = /https:\/\/[\w\.\/\-&=\%]+/g;
var found = html.match(regex);

var i;
for (i = 0; i < found.length; i++) {
  document.write(found[i] + "</br>")
}

// Bookmarklet generated
// javascript:(function()%7Bvar%20html%20%3D%20document.body.innerHTML%3Bvar%20regex%20%3D%20%2Fhttps%3A%5C%2F%5C%2F%5B%5Cw%5C.%5C%2F%5C-%26%3D%5C%25%5D%2B%2Fg%3Bvar%20found%20%3D%20html.match(regex)%3Bvar%20i%3Bfor%20(i%20%3D%200%3B%20i%20%3C%20found.length%3B%20i%2B%2B)%20%7Bdocument.write(found%5Bi%5D%20%2B%20%22%3C%2Fbr%3E%22)%7D%7D)()
