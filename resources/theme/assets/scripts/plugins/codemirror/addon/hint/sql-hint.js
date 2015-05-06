(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror"),require("../../mode/sql/sql")):typeof define=="function"&&define.amd?define(["../../lib/codemirror","../../mode/sql/sql"],e):e(CodeMirror)})(function(e){function o(t){var n=t.doc.modeOption;return n==="sql"&&(n="text/x-sql"),e.resolveMode(n).keywords}function u(e,t){var n=e.length,r=t.substr(0,n);return e.toUpperCase()===r.toUpperCase()}function a(e,t,n,r){for(var i in n){if(!n.hasOwnProperty(i))continue;Array.isArray(n)&&(i=n[i]),u(t,i)&&e.push(r(i))}}function f(e,r,i,o){var u=r.string.charAt(0)=="`",f=r.string.substr(1),l=o.getTokenAt(s(e.line,r.start));if(r.string.charAt(0)=="."||l.string=="."){if(l.string==".")var l=o.getTokenAt(s(e.line,r.start-1));var c=l.string,h=!1;c.match(/`/g)&&(h=!0,c=c.replace(/`/g,"")),t.hasOwnProperty(c)||(c=p(c,o));var d=t[c];if(!d)return;u?a(i,f,d,function(e){return"`"+e+"`"}):h?a(i,f,d,function(e){return".`"+e+"`"}):a(i,f,d,function(e){return"."+e})}else{while(r.start&&f.charAt(0)==".")r=o.getTokenAt(s(e.line,r.start-1)),f=r.string+f;u?(a(i,f,t,function(e){return"`"+e+"`"}),a(i,f,n,function(e){return"`"+e+"`"})):(a(i,f,t,function(e){return e}),a(i,f,n,function(e){return e}))}}function l(e,t){if(!e)return;var n=/[,;]/g,r=e.split(" ");for(var i=0;i<r.length;i++)t(r[i]?r[i].replace(n,""):"")}function c(e){return e.line+e.ch/Math.pow(10,6)}function h(e){return s(Math.floor(e),+e.toString().split(".").pop())}function p(e,n){var r=n.doc,o=r.getValue(),u=e.toUpperCase(),a="",f="",p=[],d={start:s(0,0),end:s(n.lastLine(),n.getLineHandle(n.lastLine()).length)},v=o.indexOf(i.QUERY_DIV);while(v!=-1)p.push(r.posFromIndex(v)),v=o.indexOf(i.QUERY_DIV,v+1);p.unshift(s(0,0)),p.push(s(n.lastLine(),n.getLineHandle(n.lastLine()).text.length));var m=0,g=c(n.getCursor());for(var y=0;y<p.length;y++){var b=c(p[y]);if(g>m&&g<=b){d={start:h(m),end:h(b)};break}m=b}var w=r.getRange(d.start,d.end,!1);for(var y=0;y<w.length;y++){var E=w[y];l(E,function(e){var n=e.toUpperCase();n===u&&t.hasOwnProperty(a)&&(f=a),n!==i.ALIAS_KEYWORD&&(a=e)});if(f)break}return f}var t,n,r,i={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},s=e.Pos;e.registerHelper("hint","sql",function(e,i){t=i&&i.tables||{};var u=i&&i.defaultTable;n=u&&t[u]||[],r=r||o(e);var l=e.getCursor(),c=[],h=e.getTokenAt(l),p,d,v;return h.end>l.ch&&(h.end=l.ch,h.string=h.string.slice(0,l.ch-h.start)),h.string.match(/^[.`\w@]\w*$/)?(v=h.string,p=h.start,d=h.end):(p=d=l.ch,v=""),v.charAt(0)=="."||v.charAt(0)=="`"?f(l,h,c,e):(a(c,v,t,function(e){return e}),a(c,v,n,function(e){return e}),a(c,v,r,function(e){return e.toUpperCase()})),{list:c,from:s(l.line,p),to:s(l.line,d)}})});