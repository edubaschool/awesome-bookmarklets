var html = document.body.innerHTML;
var regex = /rel="dialog"\stitle="[A-Z]\S+\s\S+?(?=\")/g;
var found = html.match(regex);

var i;
for (i = 0; i < found.length; i++) {
  to_replace = found[i];
    elem_replaced = to_replace.replace('rel="dialog" title="', "")
    console.log(elem_replaced)
}
