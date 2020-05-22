
var html = document.body.innerHTML;
var regex = /https:\/\/[\w\.\/\-&=\%]+/g;
var found = html.match(regex);

var i;
for (i = 0; i < found.length; i++) {
  to_replace = found[i];
    elem_replaced = to_replace.replace('&quot', "")
    document.write(elem_replaced)
}

// Bookmarklet generated
// javascript:(function()%7Bvar%20html%20%3D%20document.body.innerHTML%3Bvar%20regex%20%3D%20%2Fhttps%3A%5C%2F%5C%2F%5B%5Cw%5C.%5C%2F%5C-%26%3D%5C%25%5D%2B%2Fg%3Bvar%20found%20%3D%20html.match(regex)%3Bvar%20i%3Bfor%20(i%20%3D%200%3B%20i%20%3C%20found.length%3B%20i%2B%2B)%20%7Bto_replace%20%3D%20found%5Bi%5D%3Belem_replaced%20%3D%20to_replace.replace('%26quot'%2C%20%22%22)document.write(elem_replaced)%7D%7D)()
