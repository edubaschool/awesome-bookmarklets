var html = document.body.innerHTML;
var regex = /rel="dialog"\stitle="[A-Z]\S+\s\S+?(?=\")/g;
var found = html.match(regex);

var i;
for (i = 0; i < found.length; i++) {
  to_replace = found[i];
    elem_replaced = to_replace.replace('rel="dialog" title="', "")
    console.log(elem_replaced)
}

\*
  THIS IS THE BOOKMARKLET GENERATED ON : https://mrcoles.com/bookmarklet/

javascript:(function()%7Bvar%20html%20%3D%20document.body.innerHTML%3Bvar%20regex%20%3D%20%2Frel%3D%22dialog%22%5Cstitle%3D%22%5BA-Z%5D%5CS%2B%5Cs%5CS%2B%3F(%3F%3D%5C%22)%2Fg%3Bvar%20found%20%3D%20html.match(regex)%3Bvar%20i%3Bfor%20(i%20%3D%200%3B%20i%20%3C%20found.length%3B%20i%2B%2B)%20%7Bto_replace%20%3D%20found%5Bi%5D%3Belem_replaced%20%3D%20to_replace.replace('rel%3D%22dialog%22%20title%3D%22'%2C%20%22%22)console.log(elem_replaced)%7D%7D)()

*/
