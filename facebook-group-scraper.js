var arr = [];

String.prototype.fakeReplace = function (str, newstr) {
  return this.split(str).join(newstr)
}

var html = document.body.innerHTML;
var regex = /rel="dialog"\stitle="[A-Z]\S+\s\S+?(?=\")/g;
var found = html.match(regex);

var i
for (i = 0; i < found.length; i++) {
  to_replace = found[i]
  elem_replaced = to_replace.fakeReplace('rel="dialog" title="', '')
  verif_in_arr = arr.includes(elem_replaced);
  if (verif_in_arr === false) {
    arr.push(elem_replaced);
  }
}
  
var e;
for (e = 0; e < arr.length; e++){
  document.write("<p>" + arr[e] + "</p>");
}

//THIS IS THE BOOKMARKLET GENERATED ON : https://bookmarklets.org/maker/

//javascript:void%20function(){var%20e=[];String.prototype.fakeReplace=function(e,r){return%20this.split(e).join(r)};var%20r,l=document.body.innerHTML,t=/rel=%22dialog%22\stitle=%22[A-Z]\S+\s\S+%3F(%3F=\%22)/g,i=l.match(t);for(r=0;r%3Ci.length;r++)to_replace=i[r],elem_replaced=to_replace.fakeReplace('rel=%22dialog%22%20title=%22',%22%22),verif_in_arr=e.includes(elem_replaced),verif_in_arr===!1%26%26e.push(elem_replaced);var%20a;for(a=0;a%3Ce.length;a++)document.write(%22%3Cp%3E%22+e[a]+%22%3C/p%3E%22)}();
