(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){function t(e){for(var t=e.display.lineSpace.childNodes.length-1;t>=0;t--){var n=e.display.lineSpace.childNodes[t];/(^|\s)CodeMirror-ruler($|\s)/.test(n.className)&&n.parentNode.removeChild(n)}}function n(t){var n=t.getOption("rulers"),r=t.defaultCharWidth(),i=t.charCoords(e.Pos(t.firstLine(),0),"div").left,s=t.display.scroller.offsetHeight+30;for(var o=0;o<n.length;o++){var u=document.createElement("div");u.className="CodeMirror-ruler";var a,f=null,l=n[o];typeof l=="number"?a=l:(a=l.column,l.className&&(u.className+=" "+l.className),l.color&&(u.style.borderColor=l.color),l.lineStyle&&(u.style.borderLeftStyle=l.lineStyle),l.width&&(u.style.borderLeftWidth=l.width),f=n[o].className),u.style.left=i+a*r+"px",u.style.top="-50px",u.style.bottom="-20px",u.style.minHeight=s+"px",t.display.lineSpace.insertBefore(u,t.display.cursorDiv)}}function r(e){t(e),n(e)}e.defineOption("rulers",!1,function(i,s,o){o&&o!=e.Init&&(t(i),i.off("refresh",r)),s&&s.length&&(n(i),i.on("refresh",r))})});