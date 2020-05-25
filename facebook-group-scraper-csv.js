function exportToCsv(filename, rows) {
        var processRow = function (row) {
            return row + '\n';
        };

        var csvFile = '';
        for (var i = 0; i < rows.length; i++) {
            csvFile += processRow(rows[i]);
        }

        var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
    

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

exportToCsv('export.csv', arr)

//Le bookmarklet
//javascript:void%20function(){function%20e(e,t){for(var%20r=function(e){return%20e+%22\n%22},i=%22%22,a=0;a%3Ct.length;a++)i+=r(t[a]);var%20o=new%20Blob([i],{type:%22text/csv;charset=utf-8;%22});if(navigator.msSaveBlob)navigator.msSaveBlob(o,e);else{var%20l=document.createElement(%22a%22);if(void%200!==l.download){var%20n=URL.createObjectURL(o);l.setAttribute(%22href%22,n),l.setAttribute(%22download%22,e),l.style.visibility=%22hidden%22,document.body.appendChild(l),l.click(),document.body.removeChild(l)}}}var%20t=[];String.prototype.fakeReplace=function(e,t){return%20this.split(e).join(t)};var%20r,i=document.body.innerHTML,a=/rel=%22dialog%22\stitle=%22[A-Z]\S+\s\S+%3F(%3F=\%22)/g,o=i.match(a);for(r=0;r%3Co.length;r++)to_replace=o[r],elem_replaced=to_replace.fakeReplace('rel=%22dialog%22%20title=%22',%22%22),verif_in_arr=t.includes(elem_replaced),verif_in_arr===!1%26%26t.push(elem_replaced);e(%22export.csv%22,t)}();