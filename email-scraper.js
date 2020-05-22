var html = document.body.innerHTML;
var regex = /[\w\.\-]+\@+\w+\.\w+/g;
var found = html.match(regex);

found.forEach(element => document.write('<p>'+ element +'</p>'));

// Bookmarklet generated
//javascript:(function()%7Bvar%20html%20%3D%20document.body.innerHTML%3Bvar%20regex%20%3D%20%2F%5B%5Cw%5C.%5C-%5D%2B%5C%40%2B%5Cw%2B%5C.%5Cw%2B%2Fg%3Bvar%20found%20%3D%20html.match(regex)%3Bfound.forEach(element%20%3D%3E%20document.write('%3Cp%3E'%2B%20element%20%2B'%3C%2Fp%3E'))%7D)()
